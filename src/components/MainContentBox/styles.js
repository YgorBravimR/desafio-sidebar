import styled from "styled-components";

export const MainContentBoxContainer = styled.main`
  padding: 1.5rem;
  height: 100vh;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors['darkGreen']}
`