import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div className="weather-info">
                {<img src={this.props.img} style={{width:"100px",marginLeft:"600px",zIndex:"0"}}/>}
                {
                    <p className="icerik" style={{textAlign:"center",marginTop:"-20px",fontWeight:"bold"}}>
                    {this.props.description}</p>
                }
                {
                    this.props.country && this.props.city && 
                    <p className="ad">Lokasyon:<span className="icerik">{this.props.city}, {this.props.country}</span></p> 
                }
                {
                    this.props.temperature && 
                    <p className="ad">Sıcaklık:<span className="icerik"> {this.props.temperature} °C </span></p>
                }
                {
                    this.props.humidity && 
                    <p className="ad">Nem:<span className="icerik">  {this.props.humidity}%</span></p>
                }
            </div>
        )
    }
}
export default Weather;