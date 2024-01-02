import React, { useEffect, useState } from 'react'

export default function SunMove({ data, error }) {
    console.log(data);

    function timeEval(time) {
        const suntime = new Date(time * 1000);
        const sunmoveement = suntime.toLocaleTimeString();
        const [hours, minutes] = sunmoveement.split(':');
        return `${hours}:${minutes}`;
    }

    const [currentTime, setCurrentTime] = useState(0);

    function getCurrenttime() {
        const currentDate = new Date();

        // Get hours, minutes, and seconds
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const formattedTime = `${hours}:${minutes}`;

        setCurrentTime(formattedTime);
    }

    console.log(parseInt(currentTime));

    useEffect(() => {
        // Check if data is present
        getCurrenttime();
      }, [data]); 

    return (
        <div className='p-3'>
            <div className='bg-slate-900 rounded-lg p-3 w-[25vw]'>
                <div className='icon flex justify-between px-3'>
                    <div className=''>
                        <img src="./air/sunrise.svg" alt="sunrise" className='h-[5vh]'/>
                    </div>
                    <div>
                        <img src="./air/sunset.svg" alt="sunset" className='h-[5vh]' />
                    </div>
                </div>

                <div className='movement h-[11vh] overflow-hidden '>
                    <div className='border-t-2 rounded-full h-[50vh] relative mt-5 border-slate-500 shadow-2xl shadow-slate-100'>
                        <div className={`absolute w-14 h-14 rounded-full  ${parseInt(currentTime) > 12  ? "top-10 right-16" : parseInt(currentTime) !== 12 ? "top-0 left-28" : "top-10 left-10" } transform translate-x-1/2 -translate-y-1/2`}> 
                            <img src="./air/Sun.svg" alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className='time flex justify-between text-sm p-3 text-center'>
                    <div className='sunrise'>
                        <h3>Sunrise</h3>
                        <h3>{timeEval(data ? data.sys.sunrise : "-.-")}</h3>
                    </div>
                    <div className='sunset'>
                        <h3>Sunset</h3>
                        <h3>{timeEval(data ? data.sys.sunset : "-.-")}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
