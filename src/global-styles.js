import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }
`;

export default GlobalStyles;
