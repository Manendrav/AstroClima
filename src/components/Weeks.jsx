import React, { useEffect, useState } from 'react'

export default function Weeks({ forecast, error, icon, fernhite, celsiusToFahrenheit }) {

  const [list, setList] = useState();
  useEffect(() => {
    if (forecast) {
      setList(forecast.list);
    }
  }, [forecast]);

  // console.log(list);

  function formateday(day) {
    const [datestr, timestr] = day.split(' ');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(datestr);
    const dayOfWeek = daysOfWeek[date.getDay()]
    return dayOfWeek;

  }

  return (
    <div className='p-3'>
      <div className='w-full md:w-[25vw] bg-slate-900 rounded-lg p-5 mb-3'>
        <h1 className='text-gray-500 font-medium text-xl mb-3'>5 Day's Forecast</h1>

        <div className='px-2 py-3'>
          {list ? (
            list.map((day, index) => {
              // Render every 8th item on the list
              if ((index - 5) % 8 !== 0) {
                return null;
              }
              return (
                <div
                  key={index}
                  className={`${index < list.length - 1
                      ? 'weeks flex justify-between items-center mb-5 border-gray-600 border-b-2'
                      : 'flex justify-between items-center'
                    }`}
                >
                  <div className='p-3'>
                    <h1 className='text-sm text-gray-400'>{formateday(day.dt_txt)}</h1>
                  </div>

                  <div className='svg flex items-center p-2'>
                    <img src={icon[day.weather[0].icon]} alt='night' className='h-[5vh]' />
                    <h3 className='font-semibold text-sm mb-2 ml-2 text-gray-300'>{day.weather[0].main}</h3>
                  </div>

                  <div className='temp'>
                    <div className='text-2xl font-bold mr-2'>
                      {day ? (fernhite ? celsiusToFahrenheit(day.main.temp) : parseInt(day.main.temp)) : '-.-'}°
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span className='text-gray-400'>No data available.</span>
          )}
        </div>
      </div>
    </div>


  )
}