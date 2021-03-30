import React from "react";
import "./Comments.css"
import {useSelector} from "react-redux";
import Comment from "./Comment/Comment";
import Footer from "../Footer/Footer";

const Comments = () => {
    const usersInf = useSelector(state => state.app.userInformation);

    let userComments = usersInf.map((el, ind) => {
        let className = "first-card";
        if (ind % 2 !== 0) {
            className = "second-card"
        }
        el["className"] = className;
        return <Comment info={el} key={el["id"]}/>
    });

    return (
        <div className="comments-footer">
            <div className="wrapper-comments">
                <div className="wrapper-info">
                    Выводим комментарий
                </div>
                <div className="wrapper-box">
                    {userComments}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Comments;