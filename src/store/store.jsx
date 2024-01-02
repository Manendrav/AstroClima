import create from 'zustand';

export const useWeatherStore = create((set) => ({
    weatherData: null,
    errorMessage: null,
    forecastData: null,

    fetchWeatherData: (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3a3c18dabcf17587ca1bda001ddf22e&units=metric`;

        const todayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&excluded=hour&appid=b3a3c18dabcf17587ca1bda001ddf22e&units=metric`

       // const weekData = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b3a3c18dabcf17587ca1bda001ddf22e&units=metric`
        
        const weatherPromise = fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });

        const forecastPromise = fetch(todayForecast)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });


        return Promise.all([weatherPromise, forecastPromise])
            .then(([weatherData, forecastData]) => {
                set({
                    weatherData,
                    forecastData,
                    errorMessage: null,
                });
                return { weatherData, forecastData };
            })
            .catch((error) => {
                set({
                    weatherData: null,
                    forecastData: null,
                    errorMessage: `Error: ${error.message}`,
                });
                throw error;
            });
    },
}));

export default useWeatherStore;