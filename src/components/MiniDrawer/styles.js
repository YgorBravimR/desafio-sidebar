import styled from 'styled-components'

export const SideBarContainer = styled.div`
height: 100vh;
width: 270px;
 
.pro-inner-item{
  margin: 16px 0;

  :hover{
    color: ${({ theme }) => theme.colors['lightGrey']};
    font-weight: bold;
    border-radius: 12px;
    transition: 150ms;
  }
}

.pro-sidebar-inner{
  background: ${({ theme }) => theme.colors['baseGreen']};
  color: ${({ theme }) => theme.colors['darkGreen']};
}

.pro-icon, .pro-sidebar-footer {
  background: ${({ theme }) => theme.colors['baseGreen']};
}
`

export const SidebarCollapsedLayoutChanged = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const SidebarExpandedLayoutChanged = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

  > div {
    display: flex;
    gap: 12px;  
    margin-top: -2rem;
    margin-bottom: -1rem;
    margin-right: -1rem;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      
      p {
        font-size: 14px;
      }
    }
  }

  div > img {
    width: 45px;
    height: 45px;
    border-radius: 12px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

`

export const SearchIconContainer = styled.div`
.pro-inner-item{
  background-color: ${({ theme }) => theme.colors['lightGreen']};
  border-radius: 12px; 
  margin: 0 16px;
  padding: 8px 35px 8px 6px !important;

  .pro-icon {
  background-color: ${({ theme }) => theme.colors['lightGreen']};
  }
}
`

