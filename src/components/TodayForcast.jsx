import React, { useEffect, useState } from 'react'

export default function TodayForcast({ forecast, error, icon, data }) {

    //console.log(forecast);

    const [list, setList] = useState();
    useEffect(() => {
        if (forecast) {
            const limitedList = forecast.list.slice(0, 14);
            setList(limitedList);
        }
    }, [forecast]); // Run this effect whenever 'forecast' changes

     console.log(list);
    //console.log(data);

    // function formatetime(time) {                             // wrong way to use it because it get called every time insted difine it on inside map
    //     // const timePart = time.split(' ')[1]; 
    //     // const [hours, minutes] = timePart.split(':');       // Split hours and minutes
    //     // const parsedHours = parseInt(hours, 10);
    //     // const ampm = parsedHours >= 12 ? 'PM' : 'AM';
    //     // return `${hours}:${minutes} ${ampm}`;
    //     // console.log(time);

    // }


    function formatTime(time) {
        const date = new Date(time * 1000);
        const formattedTime = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: false });
        const [hours, minutes] = formattedTime.split(':')
        const ampm = hours >= 12 ? 'PM' : 'AM';
        return `${formattedTime} ${ampm}` ;
    }

    return (
        <div className='p-3'>
            <div className="forcast flex flex-col bg-slate-900 rounded-lg p-3 mb-3">
                <h1 className=' text-gray-600 font-medium'>Today Forcast</h1>
                <div className='flex items-center text-center gap-5 p-3 text-white overflow-scroll overflow-y-hidden no-scrollbar'>
                    {
                        list ?
                            list.map((day, key) => (
                                <div key={key} className={`${key < list.length - 1 ? 'border-r-2 pr-5 border-gray-700' : ''}`}>
                                    <h3 className='text-sm text-gray-400 font-medium mb-3'>{formatTime(day.dt)}</h3>
                                    <div className='text-center w-[6vw] h-[15vh] flex items-center '>
                                        <img src={icon[day.weather[0].icon]} alt="night" className='h-[10vh]' />
                                    </div>
                                    <h3 className='font-semibold text-sm mb-2 text-gray-300'>{day.weather[0].main}</h3>

                                    <h3 className="text-lg font-semibold">{parseInt(day.main.temp)}°</h3>
                                </div>
                            ))
                            : <div className='border-r-2 pr-5 border-gray-700'>
                                <h3 className='text-sm text-gray-400 font-medium mb-3'></h3>
                                <div className='text-center w-[6vw] h-[15vh] flex items-center '>
                                    <img src="" alt="night" className='h-[10vh]' />
                                </div>
                                <h3 className='font-semibold text-sm mb-2 text-gray-300'></h3>

                                <h3 className="text-lg font-semibold">°</h3>
                            </div>
                    }


                </div>
            </div>

            <div className='conditions flex flex-col bg-slate-900 rounded-lg p-3'>
                <h1 className='mb-5 text-gray-600 font-medium'>Air Condition</h1>
                <div className='m-3'>
                    <div className='flex justify-around mb-5'>
                        <div className='text-center'>
                            <div className='flex items-center gap-1 p-2'>
                                <img src="./air/wind.svg" alt="Wind Speed" className='h-[3vh]' />
                                <h3 className=' text-gray-400 font-medium '>Wind Speed</h3>
                            </div>
                            <h2 className="text-xl font-semibold">{data ? data.wind.speed : "-.-"} m/s</h2>
                        </div>

                        <div className='text-center'>
                            <div className='flex items-center gap-1 p-2'>
                                <img src="./air/visibility.svg" alt="Visibility" className='h-[3vh]' />
                                <h3 className=' text-gray-400 font-medium '>Visibility</h3>
                            </div>
                            <h2 className="text-xl font-semibold">{data ? parseInt(data.visibility / 1000) : "-.-"} Km/h</h2>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div className='text-center'>
                            <div className='flex items-center gap-1 p-2'>
                                <img src="./air/air.svg" alt="Humidity" className='h-[3vh]' />
                                <h3 className=' text-gray-400 font-medium '>Humidity</h3>
                            </div>
                            <h2 className="text-xl font-semibold">{data ? data.main.humidity : "-.-"} %</h2>
                        </div>

                        <div className='text-center'>
                            <div className='flex items-center gap-1 p-2'>
                                <img src="./air/pressure.svg" alt="Pressure" className='h-[3vh]' />
                                <h3 className=' text-gray-400 font-medium '>Pressure</h3>
                            </div>
                            <h2 className="text-xl font-semibold">{data ? data.main.pressure : "-.-"} hPa</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
