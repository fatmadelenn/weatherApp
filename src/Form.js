import React from "react";

class Form extends React.Component{
    render(){
        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="Şehir..."/>
                    <input type="text" name="country" placeholder="Ülke..."/>
                    <button>Hava Durumunu Getir</button>
                </form>
        )
    }
}
export default Form;