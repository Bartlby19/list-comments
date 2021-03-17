import React from "react";
import "./InputInformation.css"
import {useDispatch} from "react-redux";
import {changeStep, getTypeOfStructure} from "../redux/actions";

const InputInformation = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <body>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label>Коментарий</label>
                    <textarea className="form-control" rows="3"/>
                </div>
                <button type="button" className="btn btn-danger">Записать</button>
            </form>
            </body>
        </div>
    )
}

export default InputInformation