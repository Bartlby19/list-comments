import React from "react";
import "./InputInformation.css"
import contact from "../img/contact.jpg"
import logo from "../img/logo.jpg"
import {useDispatch} from "react-redux";
// import {changeStep, getTypeOfStructure} from "../redux/actions";

const InputInformation = () => {
    // const dispatch = useDispatch();

    return (

        <div className="wrapper">
            <div className="logo-box">
                <img className="logo-position" src={logo} alt={"logo"}/>
            </div>
            <div className="contact-box">
                <img className="contact-position" src={contact} alt={"contact"}/>
            </div>

            <div className="info-box">

                <div>
                    <label className="control-label required" htmlFor="username">Имя</label>
                    <input className="form-control " id="ex2" type="text"/>
                </div>


                <div className="info-box2">
                    <label className="control-label required" htmlFor="username" >Комментарий</label>
                    <textarea className="form-control" id="comment"/>
                </div>


                <div>
                    <label className="control-label required" htmlFor="username">E-Mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

            </div>
            <div>
                <button type="button" className="btn ">
                    <div className="control-label">Записать</div>
                </button>
            </div>

        </div>
)
}

export default InputInformation