import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import "normalize.css"
import "@/assets/css/index.less"
import store from './store';
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </HashRouter>
    // </React.StrictMode> 
);
