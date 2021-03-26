import React, {useEffect, useState} from "react";
import "./InputInformation.css"
import contact from "../img/contact.jpg"
import logo from "../img/logo.jpg"

function InputInformation() {
    const [disable, setDisable] = useState(true);
    const [inputValues, setInputValues] = useState({
        name: '', email: '', comment: ''
    });
    useEffect(() => {
        for (let key in inputValues) {
            if (inputValues[key] !== '') {
            } else {
                setDisable(true);
                return
            }
        }
        setDisable(false);
    }, [inputValues])

    function handleInputChange(event) {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    function addInformation() {
        const url = "users/information";
        let response = async () => {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputValues)
            });
        }
        let usersInformation=response();

        return;
    }

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
                    <input name="name" onChange={handleInputChange} className="form-control " id="ex2" type="text"/>
                </div>

                <div className="info-box2">
                    <label className="control-label required" htmlFor="username">Комментарий</label>
                    <textarea name="comment" onChange={handleInputChange} className="form-control" id="comment"/>
                </div>

                <div>
                    <label className="control-label required" htmlFor="username">E-Mail</label>
                    <input onChange={handleInputChange} name="email" type="email" className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                </div>
            </div>
            <div>
                <button onClick={addInformation} disabled={disable} type="button" className="btn ">

                    <div className="control-label">Записать</div>
                </button>
            </div>

        </div>
)
}

export default InputInformation