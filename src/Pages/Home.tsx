import React from 'react';
import { HomeContainer } from '../Styles/Page.style';
import ForeCast from './Forecast';
import SideNavData from './SideNav';

export const Home = () => {
    return (
        <HomeContainer>
         <SideNavData />
         <ForeCast />
         </HomeContainer>
    )
}

export default Home