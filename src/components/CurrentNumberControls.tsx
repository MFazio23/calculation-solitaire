import {Box, Button} from '@mui/material';

interface CurrentNumberControlsProps {
    currentIndex: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export function CurrentNumberControls({currentIndex, onIncrement, onDecrement}: CurrentNumberControlsProps) {
    return (
        <Box p={1} gap={1} display="flex" flexDirection="row" justifyContent="space-between">
            <Button sx={{fontSize: '2em', height: '1.5em', width: '3em'}} variant="contained"
                    disabled={currentIndex <= 1} onClick={() => onDecrement()}>-</Button>
            <Button sx={{fontSize: '2em', height: '1.5em', width: '3em'}} variant="contained"
                    disabled={currentIndex >= 13} onClick={() => onIncrement()}>+</Button>
        </Box>
    );
}
