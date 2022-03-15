import './index.css';

import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {

                color: 'white',
                bg: '#1d2433',
            }
        })
    },
})

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider resetCSS={false} theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
