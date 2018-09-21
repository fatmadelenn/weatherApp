import React from "react";

class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className="ttitle">Hava Durumu</h1>
                <p className="tsubtitle">Hava Durumunu merak ettiğiniz şehrin bilgilerini giriniz...  </p>
                <h2>{this.props.time}</h2>
            </div>
        )
    }
}
export default Titles;