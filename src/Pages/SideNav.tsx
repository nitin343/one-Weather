import React from 'react';
import CountrySelect from '../components/Autocomplete/Autocomplete';
import {SideNavContainer } from '../Styles/Page.style';
import { FontStyle, SideNavItems } from '../Styles/SideNav.style';
import Wind from '../assets/Icons/Wind';
import {getSunTime} from '../helpers/index'

import Humidity from '../assets/Icons/Humidity';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const SideNavData = () => {
    let Today: any;
    const foreCastDetail = useSelector((state: any) => state.foreCastDetail.data)
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if(foreCastDetail && foreCastDetail.list ){
        Today = foreCastDetail.list[0];
    }

    const getDay = (date: number) => {

        let Day = Days[new Date(date * 1000).getDay()]
        let sunTime = getSunTime(date);
        return <FontStyle theme={{ color: 'black', size: '15px' }}> {Day ? Day : ''} <span style={{ color: '#b8b8b8', fontSize: '15px' }} >{sunTime}</span></FontStyle>
    }


    return (
        <SideNavContainer>
            <SideNavItems className='flex items-center justify-center'>
                <div className='text-[40px] text-red-900'>One Weather</div>
                <div style={{ height: '10%', width: '100%' }} className="mb-10 ">
                    <CountrySelect />
                </div>
                {
                    Today ?
                    <div className="w-64 h-[60%] cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
                    <div className="text-md font-bold flex flex-col text-gray-900"><span className="uppercase">{foreCastDetail.city?.name}</span><span className="font-normal text-gray-700 text-[10px] ">{ getDay(foreCastDetail.city?.sunrise) }</span></div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img src={`http://openweathermap.org/img/wn/${Today.weather[0].icon}@2x.png`} alt='today weather' />
                    </div>
                    <p className="text-gray-700 mb-2">{Today?.weather[0].description}</p>
                    <div className="text-3xl font-bold text-gray-900 mb-6">{Math.ceil(Today.main.temp_max -  273.15)}<span className="font-normal text-gray-700 mx-1">/</span>{Math.floor(Today.main.temp_min -  273.15)}</div>
                    <div className="flex justify-between w-full">
                        <div className="flex items-center text-gray-700 px-2">
                            <Humidity />{Today.main.humidity}L/m<sup>2</sup>
                        </div>
                        <div className="flex items-center text-gray-700 px-2">
                            <Wind />{Today.wind.speed}km/h
                        </div>
                    </div>
                </div>
                    :
                    <>
                     <div className='w-full h-[60%] flex items-center justify-center text-center text-[15px] text-zinc-500'>
                     Climate is what we expect, weather is what we get
                     </div>
                    </>
                }
            </SideNavItems>
        </SideNavContainer>
    )
}

export default SideNavData;
