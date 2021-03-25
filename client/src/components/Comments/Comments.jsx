import React from "react";
import "./Comments.css"
import {useDispatch} from "react-redux";
import Comment from "./Comment/Comment";
import Footer from "../Footer/Footer";
// import {changeStep, getTypeOfStructure} from "../redux/actions";

const Comments = () => {
    // const dispatch = useDispatch();
    let comments = [];
    let info = {
        className: "first-card",
        name: "Sergey",
        email: "bsssssssssssdfffffffffffffsssssssssssss",
        comment: "Hello Worldewfwfwefwfwefwefwefwefwfwefwefwefewfwefwef!!!! ",
    }
    comments.push(<Comment info={info}/>);
    comments.push(<Comment info={info}/>);
    comments.push(<Comment info={info}/>);
    comments.push(<Comment info={info}/>);
    comments.push(<Comment info={info}/>);

    return (
        <div className="comments-footer">
            <div className="wrapper-comments">
                <div className="wrapper-info">
                    Выводим комментарий
                </div>
                <div className="wrapper-box">
                    {comments}
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Comments;