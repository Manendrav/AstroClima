import React from 'react'
import { CiSearch } from 'react-icons/ci';
import Weather from '../components/Weather';
import Weeks from '../components/Weeks';
import TodayForcast from '../components/TodayForcast';

export default function Home() {
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
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 rounded-md focus:outline-none bg-slate-800"
                                />
                            </div>
                        </div>

                        <div className='body flex justify-around' >
                            <div className='todaywether w-[45vw]'>
                                <div className='weather'>
                                    <Weather/>
                                </div>

                                <div className='info'>
                                    <TodayForcast/>
                                </div>
                            </div>

                            <div className='weekwether'>
                                <Weeks/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
