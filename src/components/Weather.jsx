import React, { useState } from 'react'

export default function Weather({ data, error, icon }) {

  return (
    <div className='p-3'>
      <div className='flex justify-between bg-slate-900 rounded-lg p-3'>
        <div className="location flex flex-col justify-between items-center pl-3 m-3">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-1">{data ? data.name : "-.-"}</h2>
            <h4 className="text-sm">Feels Like {data ? parseInt(data.main.feels_like) : "-.-"}°C</h4>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold mr-2">{data ? parseInt(data.main.temp) : "-.-"}°</div>
            {/* <div className="text-lg">&#176;C</div> */}
          </div>
        </div>

        <div className='svg text-center'>
          <img src={data ? icon[data.weather[0].icon] : ""} alt="weather-icon" className='h-[20vh] p-3' />
          <h3 className='font-semibold text-sm'>{data ? data.weather[0].description : "..."}</h3>
        </div>
      </div>
    </div>
  )
}
