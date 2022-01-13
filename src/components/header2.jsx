import React, {Component} from "react"
import logo from "../assets/img/logo.svg";

class Headers extends Component{
    render(){
        return(
            <div>
                <div className="header">
                    <a href={"./"}>
                        <div className="title">
                            <img className="logo-aseguradora" src={logo} alt="logo" />
                            <h4>Ucab Continental</h4>
                        </div> 
                    </a>       
                </div>               
            </div>
        );
    }
}

export default Headers;
