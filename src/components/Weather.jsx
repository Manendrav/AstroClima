import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag';

export default function Weather({ data, error, icon, fernhite, celsiusToFahrenheit }) {
  
  //console.log(data)

  return (
    <div className='p-3'>
      <div className='flex md:flex-row justify-between bg-slate-900 rounded-lg p-3'>
        <div className="location flex flex-col justify-between items-center m-3 min-[600px]:pl-5">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-1">{data ? data.name : "-.-"}</h2>
            <div className='flex justify-center gap-2'>
              <h1 className='text-sm font-medium text-gray-400'>{data ? data.sys.country : "-.-"}</h1>
              <ReactCountryFlag countryCode={data ? data.sys.country : "-.-"} svg style={{ width: '20px', height: '20px' }} />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <div className="flex items-center">
              <img src="../air/Bar.svg" alt="" className='h-[5vh] mt-2' />
              <div className="text-4xl font-bold mr-2">{data ? fernhite ? celsiusToFahrenheit(data.main.temp) : parseInt(data.main.temp) : "-.-"}°</div>
            </div>
            <h4 className="text-sm">Feels Like {data ? fernhite ? `${celsiusToFahrenheit(data.main.feels_like)} °F` : `${parseInt(data.main.feels_like)} °C` : "-.-"}</h4>
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
