import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

  *{
    // Reset de CSS
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    // Fonte padrão da aplicação
    font-family: "Manrope", sans-serif;
  }
`
export default GlobalStyle;