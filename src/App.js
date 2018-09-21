import React, { Component } from 'react';
import './App.css';
import Titles from "./Title";
import Form from "./Form";
import Weather from "./Weather";
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    img: undefined,
    time: new Date()
  }
  currentTime(){
    this.setState({time:new Date()})
  }
  componentWillMount(){
    setInterval(()=>this.currentTime(),1000)
  }
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp-273,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
        img:""
      })
    }else{
      this.setState({
        error: "Lütfen şehir ve ülke bilgisini giriniz..."
      })
    }
    
    if(this.state.description == "clear sky"){
      this.setState({img:"http://openweathermap.org/img/w/01d.png",
                      description:"Açık Hava"})
    }
    if(this.state.description == "few clouds"){
      this.setState({img:"http://openweathermap.org/img/w/02d.png",
      description:"Çok Bulutlu"})
    }
    if(this.state.description == "scattered clouds"){
      this.setState({img:"http://openweathermap.org/img/w/03d.png",
      description:"Az Bulutlu"})
    }
    if(this.state.description == "broken clouds" || this.state.description == "overcast clouds"){
      this.setState({img:"http://openweathermap.org/img/w/04d.png",
      description:"Parçalı Bulutlu"})
    }
    if(this.state.description == "shower rain"){
      this.setState({img:"http://openweathermap.org/img/w/09d.png",
      description:"Az Yağmurlu"})
    }
    if(this.state.description == "rain"){
      this.setState({img:"http://openweathermap.org/img/w/10d.png",
      description:"Yağmurlu"})
    }
    if(this.state.description == "thunderstorm"){
      this.setState({img:"http://openweathermap.org/img/w/11d.png",
      description:"Sağanak Yağmurlu"})
    }
    if(this.state.description == "snow"){
      this.setState({img:"http://openweathermap.org/img/w/13d.png",
      description:"Karlı"})
    }
    if(this.state.description == "mist"){
      this.setState({img:"http://openweathermap.org/img/w/50d.png",
      description:"Sisli"})
    }
  }

  render() {
    return (
            <div>
                <div className="title"><Titles time={this.state.time.toLocaleTimeString()}/></div>
                <div className="form">
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    img={this.state.img}
                  />
                </div>
            </div>

    )
  }
}
export default App;
