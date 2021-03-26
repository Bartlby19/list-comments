import React, {useEffect}from "react";
import "./Comments.css"
import {useDispatch, useSelector} from "react-redux";
import Comment from "./Comment/Comment";
import Footer from "../Footer/Footer";
import {addUsersInformation} from "../redux/actions";

const Comments = () => {
    const dispatch = useDispatch();
    const usersInf = useSelector(state => state.app.userInformation)
    let userComments = usersInf.map((el, ind) => {
        let className = "first-card";
        if (ind % 2 !== 0) {
            className = "second-card"
        }
         el["className"] = className;
        return <Comment info={el} key={el["id"]}/>
    });
    useEffect(() => {
        dispatch(addUsersInformation())
    },[])
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