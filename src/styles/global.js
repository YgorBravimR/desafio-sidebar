import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }

    :focus {
      outline: 0;
    }

    body {
      height: 100vh;
      font-family: 'Poppins', sans-serif;
      background-color: ${({theme}) => theme.colors['lightGrey']};
    }
`

export const MainContainer = styled.div`
  display: flex;

`