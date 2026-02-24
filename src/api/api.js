const apiKey = 'e7a1aeef7cb4e7d34c159d32607c5401';

const getWeather = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    return data;
};

export default getWeather;