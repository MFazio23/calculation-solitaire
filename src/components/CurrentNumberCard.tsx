import Star from '@mui/icons-material/Star';
import {Box, Card, Typography} from '@mui/material';

interface CurrentNumberCardProps {
    currentIndex: number;
    stackNumbers: string[];
    onCardTapped: () => void;
}

export function CurrentNumberCard({currentIndex, stackNumbers, onCardTapped}: CurrentNumberCardProps) {
    const previousValue = stackNumbers[currentIndex - 1];
    const currentValue = stackNumbers[currentIndex];
    const nextValue = stackNumbers[currentIndex + 1];

    return (
        <Card onClick={onCardTapped}
              sx={{height: 400, aspectRatio: "5/7", padding: 0, position: 'relative'}}>
            <Typography position="absolute" left={24} top={16} variant="h5"
                        color="textSecondary">
                {previousValue}
            </Typography>
            <Typography position="absolute" right={24} bottom={16} variant={currentIndex === 12 ? "body1" : "h5"}
                        justifyContent="center" alignItems="center" color="textSecondary">
                {currentIndex === 12 ? <Star/> : nextValue ?? ''}
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <Typography variant="h1" color="primary" fontFamily="boecklins-universe"
                            fontSize={200}>
                    {currentIndex === 13 ? <Star sx={{fontSize: 200, mt: 3}}/> : currentValue ?? ''}
                </Typography>
            </Box>
        </Card>
    );
}
