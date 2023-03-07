import styled from 'styled-components';

export const SideNavItems = styled.div`
   width:  100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   border-radius: 3px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const TodayWeather = styled.div`
width: 100%;
height: 40%;
font-weight: 400;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-family: Golos Text;
`

export const SidenavIconImg = styled.div`
  width: 100%;
  height: 80px;
  align-item: flex-end;
  font-family: 1px
`

export const SideNavDayTime = styled.div`
 width: 100%;
 height: 130px;
 display flex;
 flex-direction: column;
 align-items: center;

`

export const FontStyle = styled.div`
 color: ${(props) => props.theme.color};
 font-size: ${(props) => props.theme.size};
 
`

export const FontStyleSpan = styled.span`
    color: ${(props) => props.theme.color}
    font-size: ${(props) => props.theme.size}

`