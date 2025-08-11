import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, ThemeProvider} from '@mui/material';

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#273021', // Example primary color
        },
        secondary: {
            main: '#B8A88B', // Example secondary color
        },
        // Add or customize other palette colors as needed
    },
    typography: {
        fontFamily: 'JetBrains Mono, monospace', // Example font family
        // Customize font sizes, weights, etc.
    },
    // Add or customize other theme properties
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={appTheme}>
            <App/>
        </ThemeProvider>
    </StrictMode>,
)
