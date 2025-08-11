import {Typography} from '@mui/material';

export function TopFactorNumber({factor}: { factor: number }) {
    return (
        <Typography variant="h4" fontFamily="boecklins-universe" color="secondary">x{factor}</Typography>
    )
}
