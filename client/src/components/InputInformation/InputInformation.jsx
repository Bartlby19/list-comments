import React, {useEffect, useState} from "react";
import "./InputInformation.css"
import contact from "../img/contact.jpg"
import logo from "../img/logo.jpg"
import {useDispatch} from "react-redux";
import {addUsersInformation} from "../redux/actions";

function InputInformation() {
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(true);
    const [inputValues, setInputValues] = useState({
        name: '', email: '', comment: ''
    });
    useEffect(() => {
        dispatch(addUsersInformation());
        for (let key in inputValues) {
            const value = inputValues[key];
            if (value !== '') {
            } else {
                setDisable(true);
                return
            }
        }
        setDisable(false);

    }, [inputValues]);



    function handleInputChange(event) {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    function addInformation() {
        dispatch(addUsersInformation(inputValues));
        setInputValues({...inputValues, name: '', email: '', comment: ''});
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
                    <input name="name" onChange={handleInputChange} className="form-control " id="ex2" type="text"
                           value={inputValues.name}
                    />
                </div>
                <div className="info-box2">
                    <label className="control-label required" htmlFor="username">Комментарий</label>
                    <textarea value={inputValues.comment} name="comment" onChange={handleInputChange}
                              className="form-control" id="comment"/>
                </div>
                <div>
                    <label className="control-label required" htmlFor="username">E-Mail</label>
                    <input value={inputValues.email} onChange={handleInputChange} name="email" type="email"
                           className="form-control"
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