import React from "react";
import "./InputInformation.css"
import contact from "../img/contact.jpg"
import logo from "../img/logo.jpg"
import {useDispatch} from "react-redux";
import {changeStep, getTypeOfStructure} from "../redux/actions";

const InputInformation = () => {
    const dispatch = useDispatch();


    return (
        <div className="size-info">

            <img className="logo-position" src={logo} alt={"logo"}/>

            <div>
                <img className="contact-position" src={contact} alt={"contact"}/>
            </div>

                <div>
                    <label className="control-label required" htmlFor="username">Имя</label>
                    <input className="form-control " id="ex2" type="text"/>
                </div>

                <div>
                    <label className="control-label required" htmlFor="username">E-Mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>


                <div>
                    <label className="control-label required" htmlFor="username">Комментарий</label>
                    <textarea className=" textarea form-control" rows="3"/>
                </div>

                    <button type="button" className="btn ">
                        <div className="control-label">Записать</div>
                    </button>







</div>
)
}

export default InputInformation