import React, { Component } from 'react'
import Weather from './weather.jsx'
import Loader from './Loader'

class Maincomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apiId: "1d6bc12a5a65a7830ea97716617284f2",
            weatherData: {
                current: undefined,
                min: undefined,
                max: undefined,
                desc: '',
                iconCode: undefined,
                city: undefined,
                state: undefined
            },
            errorMsg: false,
            loading: false
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    findTemp(temp) {
        return Math.ceil(temp - 273.15);
    }
    async makeApiCall(url) {
        fetch(url)
            .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error("City not found");
                }
            })
            .then(data => {
                const dataObj = {
                    current: this.findTemp(data.main.temp),
                    min: this.findTemp(data.main.temp_min),
                    max: this.findTemp(data.main.temp_max),
                    desc: data.weather[0].description,
                    iconCode: data.weather[0].id,
                    city: data.name,
                    country: data.sys.country
                }
                this.setState({
                    weatherData: dataObj,
                    errorMsg: false,
                    loading:false
                });
            }).catch(error => {
                this.setState({
                    weatherData: {
                        current: undefined,
                        min: undefined,
                        max: undefined,
                        desc: '',
                        iconCode: undefined,
                        city: undefined,
                        state: undefined
                    },
                    errorMsg: true,
                    loading:false
                })
            }
            )
            
    }

    handleEvent(event) {
        this.setState({
            loading: true
        })
        event.preventDefault();
        const City = event.target[0].value;
        const State = event.target[0].value;
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${City},${State}&appid=${this.state.apiId}`;
        this.makeApiCall(api);
    }

    render() {
        const loader = this.state.loading === true ?
            <div><Loader></Loader></div>
            :
            <div>
                <h1 style={{ color: 'white' }}>Weather App</h1>
                <Weather
                    temp={this.state.weatherData.current}
                    min={this.state.weatherData.min}
                    max={this.state.weatherData.max}
                    iconCode={this.state.weatherData.iconCode}
                    desc={this.state.weatherData.desc}
                    city={this.state.weatherData.city}
                    country={this.state.weatherData.country}
                    name="Ashok"
                    errorMsg={this.state.errorMsg}
                    eventHandler={this.handleEvent}></Weather>
            </div>
        return (
            <div>
                { loader }
            </div>
        )
    }
}

export default Maincomponent
