export default class WeatherService {
    static getWeatherForecasts(startDateIndex) {
        //const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
        //return HttpClient.get(url);
        
        // Mock api call
        return new Promise((resolve) => {
            resolve([...Array(100).keys()].map(idx => {
                var date = new Date();
                date.setDate(date.getDate() + idx + startDateIndex);
                var temperature = Math.floor(Math.random() * 40);
                return {
                    dateFormatted: date.toLocaleDateString(),
                    temperatureC: temperature,
                    temperatureF: 32 + Math.floor(temperature / 0.5556),
                    summary: '....'
                }
            }));
        });
    }
}