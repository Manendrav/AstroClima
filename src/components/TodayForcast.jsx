import React from 'react'

export default function TodayForcast() {
    return (
        <div className='p-3'>
            <div className="forcast flex flex-col bg-slate-900 rounded-lg p-3 mb-3">
                <h1 className=' text-gray-600 font-medium'>Today Forcast</h1>
                <div className='flex items-center text-center gap-5 p-3'>
                    <div className='border-r-2 pr-5 border-gray-700 '>
                        <h3 className='text-sm text-gray-400 font-medium mb-4'>10:25 AM</h3>
                        <img src="./Weathicon/night.svg" alt="night" className='h-[5vh] my-2' />
                        <h3 className="text-lg font-semibold">45°</h3>
                    </div>

                    <div className='border-r-2 pr-5'>
                        <h3 className='text-sm text-gray-400 font-medium mb-4'>10:25 AM</h3>
                        <img src="./Weathicon/night.svg" alt="night" className='h-[5vh] my-2' />
                        <h3 className="text-lg font-semibold">45°</h3>
                    </div>

                    <div className='border-r-2 pr-5'>
                        <h3 className='text-sm text-gray-400 font-medium mb-4'>10:25 AM</h3>
                        <img src="./Weathicon/night.svg" alt="night" className='h-[5vh] my-2' />
                        <h3 className="text-lg font-semibold">45°</h3>
                    </div>

                    <div className='border-r-2 pr-5'>
                        <h3 className='text-sm text-gray-400 font-medium mb-4'>10:25 AM</h3>
                        <img src="./Weathicon/night.svg" alt="night" className='h-[5vh] my-2' />
                        <h3 className="text-lg font-semibold">45°</h3>
                    </div>

                    <div className='border-r-2 pr-5'>
                        <h3 className='text-sm text-gray-400 font-medium mb-4'>10:25 AM</h3>
                        <img src="./Weathicon/night.svg" alt="night" className='h-[5vh] my-2' />
                        <h3 className="text-lg font-semibold">45°</h3>
                    </div>
                </div>
            </div>

            <div className='conditions flex flex-col bg-slate-900 rounded-lg p-3'>
                <h1 className='mb-5 text-gray-600 font-medium'>Air Condition</h1>
                <div>
                    <div className='flex justify-around mb-5'>
                        <div className='text-center'>
                            <div className='flex items-center'>
                                <img src="./Weathicon/wind.svg" alt="air" className='h-[5vh]' />
                                <h3 className=' text-gray-400 font-medium '>Wind Speed</h3>
                            </div>
                            <h2 className="text-xl font-semibold">30 Km/h</h2>
                        </div>

                        <div className='text-center'>
                            <div className='flex items-center'>
                                <img src="./Weathicon/wind.svg" alt="air" className='h-[5vh]' />
                                <h3 className=' text-gray-400 font-medium '>Wind Speed</h3>
                            </div>
                            <h2 className="text-xl font-semibold">30 Km/h</h2>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div className='text-center'>
                            <div className='flex items-center'>
                                <img src="./Weathicon/wind.svg" alt="air" className='h-[5vh]' />
                                <h3 className=' text-gray-400 font-medium '>Wind Speed</h3>
                            </div>
                            <h2 className="text-xl font-semibold">30 Km/h</h2>
                        </div>

                        <div className='text-center'>
                            <div className='flex items-center'>
                                <img src="./Weathicon/wind.svg" alt="air" className='h-[5vh]' />
                                <h3 className=' text-gray-400 font-medium '>Wind Speed</h3>
                            </div>
                            <h2 className="text-xl font-semibold">30 Km/h</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
