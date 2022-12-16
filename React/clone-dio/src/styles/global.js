import { createGlobalStyle } from 'styled-components'

/* função para que seja aplicada uma estilização padrão na aplicação */

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }
`