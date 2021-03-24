import React from "react";
import "./Footer.css"
import logo from "../img/logo.jpg";
import vk from "../img/vk.jpg";
import fb from "../img/fb.jpg";

const Footer = () => {
    return (
        <div className="wrapper-footer">
            <div className="box-logo">
                <img className="logo-position" src={logo} alt={"logo"}/>
            </div>
            <div className="social-networks">
                <a href="https://vk.com/obslyzhivaniesaitov/">
                    <img src={vk} alt="vk"/>
                </a>
                <a href="https://www.facebook.com/honeyhuntersmanagement/">
                    <img src={fb} alt="fb" className="fb-position"/>
                </a>
            </div>
        </div>
    )
}

export default Footer