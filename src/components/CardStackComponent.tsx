import {Box} from '@mui/material';
import {TopFactorNumber} from './TopFactorNumber';
import {CurrentNumberCard} from './CurrentNumberCard';
import {StackNumbersGrid} from './StackNumbersGrid';
import {CurrentNumberControls} from './CurrentNumberControls';

interface CardStackComponentProps {
    currentIndex: number;
    factor: number;
    updateIndex: (newIndex: number) => void;
}

function getStackNumbers(factor: number): string[] {
    const numbers = Array.from(Array(13).keys()).map((_, i) => ((i + 1) * factor) % 13);

    return numbers.map(number => {
        switch (number) {
            case 0:
                return 'K';
            case 1:
                return 'A';
            case 11:
                return 'J';
            case 12:
                return 'Q';
            default:
                return number.toString();
        }
    })
}

export function CardStackComponent({currentIndex, factor, updateIndex}: CardStackComponentProps) {
    const stackNumbers = getStackNumbers(factor);

    const handleChangeIndex = (newIndex: number) => {
        if (newIndex < 0 || newIndex > 13) {
            return; // Prevent going out of bounds
        }
        updateIndex(newIndex);
    }

    return (
        <Box>
            <TopFactorNumber factor={factor}/>
            <CurrentNumberCard currentIndex={currentIndex}
                               stackNumbers={stackNumbers}
                               onCardTapped={() => handleChangeIndex(currentIndex + 1)}/>
            <CurrentNumberControls currentIndex={currentIndex}
                                   onIncrement={() => handleChangeIndex(currentIndex + 1)}
                                   onDecrement={() => handleChangeIndex(currentIndex - 1)}/>
            <StackNumbersGrid currentIndex={currentIndex} stackNumbers={stackNumbers}/>
        </Box>
    )
}
