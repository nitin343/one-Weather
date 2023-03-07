import { useSelector } from 'react-redux/es/exports';
import DayCard from '../components/Card/DayCard';
import { ForecastContainer } from '../Styles/Page.style';
import windImg from '../assets/Wind.png';
import Rain from '../assets/Rain.png';
import Clouds from '../assets/Clouds.png'
import ForeCastCard from '../components/Card/forecast.card';
import dullCloud from '../assets/greyCloud.png'
import {getRainValue} from '../helpers/index'


export const ForeCast = () => {
    let DayList: any = [];
    let DayDetail: any;
    const foreCastDetail = useSelector((state: any) => state.foreCastDetail.data)
    if (foreCastDetail && foreCastDetail.list) {
        let FiveDay = (data: any) => {
            return (data.reduce((list: any, item: any) => {
                const forecastDate = item.dt_txt.substr(0, 10);
                list[forecastDate] = list[forecastDate] || [];
                list[forecastDate].push(item);
                return list;
            }, {}));
        };
        DayList = Object.values(FiveDay(foreCastDetail.list));

        if (DayList) {
            DayDetail = DayList.length > 5 ? DayList.slice(1, 6) : DayList;
                                   
        }
    }
    return (
        <ForecastContainer >
            <div className='flex gap-3'>
                {
                    DayDetail ?
                        <div className='flex flex-col w-full h-full '>
                            <div className='w-[74vw] h-[40vh] gap-3 xl:w-[100vw] xl:overflow-y-auto xl:justify-start flex items-center justify-center flex-row'>
                                {
                                    DayDetail.map((city: any, index: number) => <DayCard key={city[0].name + '_' + index} city={city[0]} />)
                                }
                            </div>
                            <div className='w-full min-[55vh] max-h-max'>
                                <span className='text-lg font-bold '>Today' Hghlight</span>
                                <div className='flex flex-wrap flex-row md:flex-col gap-5 justify-around mt-4'>
                                   <ForeCastCard Img={windImg} Name={'Wind Status'} Data={`${DayDetail[0][0].wind.speed} Km/h`}/>
                                   <ForeCastCard Img={Clouds} Name={'Humidity'} Data={`${DayDetail[0][0].main.humidity} %`}/>
                                   <ForeCastCard Img={Rain} Name={'Rain'} Data={getRainValue(DayDetail[0][0].main.pressure)}/>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text-[30px] text-zinc-500 justify-center items-center'>
                         <img className='h-[160px] md:h-[80px]' src={dullCloud} alt='cloud' />
                         <div className='mt-10'> Search For Location </div>
                        </div>
                }

            </div>
        </ForecastContainer>
    )
}

export default ForeCast;