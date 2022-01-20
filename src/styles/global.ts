import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-background: #F0F2F5;

    --color-text: #969CB3;
    --color-title: #363F5F;

    --color-primary: #5429CC;
    --color-primary-light: #6933FF;
    --color-green: #33CC95;
    --color-red: #E62E4D;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
}

html{
    @media only screen and (max-width: 1080px){
        font-size: 93.75%;
    }

    @media only screen and (max-width: 720px){
        font-size: 87.5%;
    }
}

body, button{
    background-color: var(--color-background);
    --webkit-font-smoothing: antialised;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
