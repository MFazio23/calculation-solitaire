import './App.css'
import {Box, Typography} from '@mui/material';
import {CardStackComponent} from './components/CardStackComponent';
import {useState} from 'react';

function App() {
    const [currentIndices, setCurrentIndices] = useState(Array(4).fill(0).map(() => 1));

    const handleUpdateIndex = (stackNum: number, newIndex: number) => {
        const newIndices = [...currentIndices];
        newIndices[stackNum] = newIndex;
        setCurrentIndices(newIndices);
    }

    const cardsPlayed = currentIndices.reduce((acc, index) => acc + index, 0);

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h2" pb={2} fontFamily="boecklins-universe" position="absolute" top={24} right={24}
                        color="secondary">
                Cards played: {cardsPlayed}
            </Typography>
            <Box display="flex" flexDirection="row" gap={5}>
                <CardStackComponent key={1} factor={1} currentIndex={currentIndices[0]}
                                    updateIndex={newIndex => handleUpdateIndex(0, newIndex)}/>
                <CardStackComponent key={2} factor={2} currentIndex={currentIndices[1]}
                                    updateIndex={newIndex => handleUpdateIndex(1, newIndex)}/>
                <CardStackComponent key={3} factor={3} currentIndex={currentIndices[2]}
                                    updateIndex={newIndex => handleUpdateIndex(2, newIndex)}/>
                <CardStackComponent key={4} factor={4} currentIndex={currentIndices[3]}
                                    updateIndex={newIndex => handleUpdateIndex(3, newIndex)}/>
            </Box>
        </Box>
    )
}

export default App
