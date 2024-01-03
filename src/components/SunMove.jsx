import React, { useEffect, useState } from 'react'
import L from 'leaflet';
import Map from './Map';

export default function SunMove({ data, error }) {
    //console.log(data);

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

    //console.log(parseInt(currentTime));

    useEffect(() => {
        // Check if data is present
        getCurrenttime();
    }, [data]);


    // Map

    function showMap({ latitude, longitude }) {
        useEffect(() => {
            if (latitude && longitude) {
                // Initialize the map
                const map = L.map('map').setView([latitude, longitude], 13);

                // Add a tile layer (you can choose different providers)
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                }).addTo(map);

                // Add a marker at the specified location
                L.marker([latitude, longitude]).addTo(map);
            }
        }, [latitude, longitude]);

        return <div id="map" style={{ height: '400px' }}></div>;
    }

    return (
        <div className='p-3'>
            <div className='bg-slate-900 rounded-lg p-3 w-[25vw]'>
                <div className='icon flex justify-between px-3'>
                    <div className=''>
                        <img src="./air/sunrise.svg" alt="sunrise" className='h-[4vh]' />
                    </div>
                    <div>
                        <img src="./air/sunset.svg" alt="sunset" className='h-[4vh]' />
                    </div>
                </div>

                <div className='movement h-[11vh] overflow-hidden '>
                    <div className='border-t-2 rounded-full h-[50vh] relative mt-5 border-slate-500 shadow-2xl shadow-slate-100'>
                        <div className={`absolute w-14 h-14 rounded-full  ${parseInt(currentTime) > 12 ? "top-10 right-16" : parseInt(currentTime) == 12 ? "top-0 left-28" : "top-5 left-10"} transform translate-x-1/2 -translate-y-1/2`}>
                            <img src="./air/Sun.svg" alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className='time flex justify-between text-sm p-3 text-center'>
                    <div className='sunrise'>
                        <h3 className='text-gray-500'>Sunrise</h3>
                        <h3 className='font-semibold'>{data ? timeEval(data.sys.sunrise) : "-.-"}</h3>
                    </div>
                    <div className='sunset'>
                        <h3 className='text-gray-500'>Sunset</h3>
                        <h3 className='font-semibold'>{data ? timeEval(data.sys.sunset) : "-.-"}</h3>
                    </div>
                </div>
            </div>

            <div className='map mt-5'>
                <div className="map bg-slate-900 h-[40vh] overflow-hidden rounded-md flex justify-center items-center text-gray-500">
                    {data ? (
                        <Map latitude={data.coord.lat} longitude={data.coord.lon} />
                    ) : (
                        'Your Location...'
                    )}
                </div>
            </div>
        </div>
    )
}
