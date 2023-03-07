import React from 'react';

export const ForeCastCard = ({Img, Name, Data}: any) => {
    return (
        <>
            <div className="w-[30%] h-[65%] md:w-[96%] md:mb-4 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                <div className="text-md flex flex-col w-full !items-start font-medium text-gray-500">
                    <span className="uppercase">
                        {Name}
                    </span>
                </div>
                <div className="w-full h-32 flex items-center justify-around">
                    <img src={Img} className='w-24 h-24' alt='forecast'/>
                    <p className="text-gray-700 mb-2 text-[20px]">{Data}</p>
                </div>
            </div>
        </>
    )
}

export default ForeCastCard;