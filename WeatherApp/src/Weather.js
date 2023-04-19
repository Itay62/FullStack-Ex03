import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city || 'New York',
            weather : {}
        };
    }
    componentDidMount() {
        this.fetchWeatherData(this.state.city);
    }

    componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            this.setState({
                city: this.props.city
            })
            this.fetchWeatherData(this.props.city)
        }
    }

    fetchWeatherData(city) {
        const apiKey = '3d15c809bd067055b5e0b805de383be3';
        const url = 'https://api.openweathermap.org/data/2.5/weather';
        axios.get(url, {
            params: {'q': city,
                        'units': 'metric',
                         'appid': apiKey}
        })
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                const weather = res.data;
                this.setState({weather});
            }
        });
    }

    render() {
        const {city, weather} = this.state;
        if (weather.main) {
            return (<>
                <h3>{city}, {weather.sys.country}</h3>
                <div>{weather.main.temp}&#186;</div>
                <div>{weather.weather[0].main}</div>
                <div>feels like {weather.main.feels_like}&#186;</div>
            </>);
        }
        return <div>Loading...</div>
    }
}

export default Weather;