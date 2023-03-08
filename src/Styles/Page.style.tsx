import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #d6d7da;

  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    flex-direction: column;
    overflow-x: hidden
  }
`

export const SideNavContainer = styled.div`
  width: 24vw;
  padding: 10px;
  border-radius: 10px;
  background-color: #fffefd;

  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`

export const ForecastContainer = styled.div`
  width: 76vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    padding: 06px;
    align-items: flex-start;
    justify-content: flex-start;
   background-color: #d6d7da;
  }
`

export const DividerComponent = styled.div`
  width: 100% !important;
  border: 1px solid #fffefd;
`
