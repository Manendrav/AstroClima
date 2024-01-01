import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import Weather from '../components/Weather';
import Weeks from '../components/Weeks';
import TodayForcast from '../components/TodayForcast';
import { useWeatherStore } from '../store/store';


export default function Home() {
    const { fetchWeatherData, weatherData, errorMessage, forecastData } = useWeatherStore();

    const inputRef = useRef();
    const [city, setCity] = useState('');

    const handleInputChange = () => {
        const newCity = inputRef.current.value;
        setCity(newCity);
        inputRef.current.value = '';
        fetchWeatherData(newCity)
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleInputChange();
        }
    };

    console.log(city);

    const weatherIcon = {
        "01d": "./day/clear-sky-1d.svg",
        "02d": "./day/few-cloud-2d.svg",
        "03d": "./day/full-cloudy-3d-4d.svg",
        "04d": "./day/full-cloudy-3d-4d.svg",
        "09d": "./day/shower-rain-9d.svg",
        "10d": "./day/rain-10d.svg",
        "11d": "./day/rainy-thnderstorm-11d.svg",
        "13d": "./day/snow-13d.svg",
        "50d": "./day/mist-50d.svg",
    
        "01n": "./night/clear-sky-1n.svg",
        "02n": "./night/few-cloud-2n.svg",
        "03n": "./night/full-cloudy-3n-4n.svg",
        "04n": "./night/full-cloudy-3n-4n.svg",
        "09n": "./night/shower-rain-9n.svg",
        "10n": "./night/rain-10n.svg",
        "11n": "./night/rainy-thnderstorm-11n.svg",
        "13n": "./night/snow-13n.svg",
        "50n": "./night/mist-50n.svg",
    
      }


    return (
        <div>
            <div className="w-full  relative text-white">
                <img
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    src="bg-black.png"
                    alt="night"
                />
                <div className="relative z-10  max-w-6xl mx-auto p-3">
                    <div className='p-2'>
                        <div className='top flex justify-between my-3 p-2'>
                            <div className='logo text-xl font-semibold text-blue-400 my-auto'>
                                ASTROCLIMA
                            </div>

                            <div className="bg-slate-800 p-2 ml-10 rounded-full w-[30rem] flex" >
                                <div className='mt-1 mr-1 text-slate-600'>
                                    <CiSearch size="1.5em" className='ml-2' />
                                </div>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 rounded-md focus:outline-none bg-slate-800"
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>

                        <div className='body flex justify-around' >
                            <div className='todaywether w-[45vw]'>
                                <div className='weather'>
                                    <Weather data={weatherData} error={errorMessage} icon={weatherIcon}/>
                                </div>

                                <div className='info'>
                                    <TodayForcast data={weatherData} forecast={forecastData} icon={weatherIcon}/>
                                </div>
                            </div>

                            <div className='weekwether'>
                                <Weeks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
