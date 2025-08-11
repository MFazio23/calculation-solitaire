import {Grid, Typography} from '@mui/material';

interface StackNumbersGridProps {
    currentIndex: number;
    stackNumbers: string[];
}

export function StackNumbersGrid({currentIndex, stackNumbers}: StackNumbersGridProps) {
    return (
        <Grid container spacing={2}>
            {stackNumbers.map((number, index) => (
                <Grid size={{xs: 12, sm: 6, md: 4}} key={index}
                      display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="body1"
                                color={currentIndex <= index ? 'secondary' : 'textPrimary'}>{number}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}
