import React from 'react'

export default function Weather() {
  return (
    <div className='p-3'>
      <div className='flex justify-between bg-slate-900 rounded-lg p-2'>
        <div className="location flex flex-col justify-between items-center p-2">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Delhi</h2>
            <h4 className="text-sm">Current Weather: 0°C</h4>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold mr-2">45°</div>
            {/* <div className="text-lg">&#176;C</div> */}
          </div>
        </div>

        <div className='svg'>
          <img src="./Weathicon/night.svg" alt="night" className='h-[20vh] mt-5' />
        </div>
      </div>
    </div>
  )
}
