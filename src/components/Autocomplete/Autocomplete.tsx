import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import useFetch from '../../hooks/useFetch.hook';
import useDebounce from '../../hooks/useDebounce.hook';
import { optionType } from '../../types/index';
import { useDispatch } from 'react-redux';
import { SET_FORECAST } from '../../Redux/reducers/foreCastData.reducer';

export default function CountrySelect(): JSX.Element {

  const [citys, setCitys] = useState<[]>([]);
  const [selectedCity, setSelctedCity] = useState<optionType | null>(null)
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [autocomplete, setAutocomplete] = useState<boolean>(false);
  const [state, fetchData] = useFetch<any>()
  const [climateData, climateFetch] = useFetch<any>()
  const debounceSearch = useDebounce<string>(input, 300)

  const dispatch = useDispatch();

  function getCityName(value: any) {
    fetchData(value)
  }

  useEffect(() => {
    if (debounceSearch) getCityName(`https://api.openweathermap.org/geo/1.0/direct?q=${debounceSearch}&limit=6&appid=bf61b030754834fa8e3c8117aa809318`)
  
  }, [debounceSearch])

  useEffect(() => {
    setCitys(state.data)
  }, [state])

  useEffect(() => {
    dispatch(SET_FORECAST(climateData.data))
    setLoading(false)

  }, [climateData])


  function handleSearch(event: any) {
    let value = event.target.value.trim();
    setInput(value);
    setAutocomplete(true)
    if (value === '') {
      return setAutocomplete(false)
    }
  }

  const onOptionSelect = (option: optionType) => {
    setInput(option.name)
    setSelctedCity(option)
    setAutocomplete(false)
  }

  const searchClimateDetail = () => {
    if (!selectedCity) return
    setLoading(true)
    getClimateDetail(selectedCity)
  }

  const getClimateDetail = (option: optionType) => {
    climateFetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${option.lon}&appid=bf61b030754834fa8e3c8117aa809318`)
  }

  return (
    <Stack spacing={2} width='100%' className='items-center'>
      <div className='flex mt-10 lg:mt-4 ' >
        <input
          type='text'
          className="px-2 py-1 rounded-1-md border-2 md:w-[80%] border-black"
          onChange={handleSearch}
          placeholder='search your city...'
          value={input}
        />

        <button className='relative rounded-r-md border-2 w-20 border-zinc-500 hover:bg-slate-800 hover:text-gray-50 text-zinc-500 px-2 py-2 cursor-pointer'
          onClick={searchClimateDetail}
        >
          {
            loading ?
              <div
                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
              </div>
              :
              <span>Search</span>
          }
        </button>
      </div>
      {autocomplete ? <ul className='md:!w-[100%] w-[98%] lg:w-[43%] h-auto z-50 !mt-0 bg-white !justify-start !items-start  ` ml-0 border-2  border-pink-100 rounded-b-md'>
        {citys && citys.map((city: optionType, index) =>
        (
          <li key={city.name + '_' + index}>
            <button className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer'
              onClick={() => onOptionSelect(city)}>
              {city.name}
            </button>
          </li>
        )
        )}
      </ul>
        : <></>
      }
    </Stack>
  );
}
