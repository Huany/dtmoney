import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background : #f0f2f5;

        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --white: #ffffff;

        --text-title: #363F5F;
        --text-body: #969CB3;
    }
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        //padrão 16px
        @media(max-width: 1080px){
            font-size: 93.75%; // 93.75%; de 16px = 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; // 87.5%; de 16px = 14px
        }
    }
    body {
        background: var(--background);
        -webkit-font-antialiased: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,.5);
        
        position:fixed;
        top: 0;
        bottom:0;
        right: 0;
        left:0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;

        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .25rem; 
    }
    .react-modal-close{
        position: absolute;
        right:1.5rem;
        top:1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(.8);
        }
    }

`;
