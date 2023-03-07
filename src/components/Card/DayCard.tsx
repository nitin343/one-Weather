import React from 'react'


export const DayCard = ({city}: any) => {
    const currentDay = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']

    const getDay = (value: any) => {
       let Day = currentDay[new Date(value * 1000).getDay()];
       return  <span>{Day}</span>
    }
    
    return (
        <>
            <div className="w-[35%] h-[70%] md:mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                <div  className="text-md font-bold flex flex-col text-gray-900">
                <span className="uppercase">
                 {getDay(city.dt)}    
                </span></div>
                <div className="w-32 h-32 flex items-center justify-center">
                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="city weather" />
                </div>
                <p className="text-gray-700 mb-2 text-sm">{city?.weather[0].description}</p>
            </div>
        </>
    )
}

export default DayCard;