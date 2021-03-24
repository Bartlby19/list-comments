import React from "react";
import "./Comments.css"
import {useDispatch} from "react-redux";
import Comment from "./Comment/Comment";
import Footer from "../Footer/Footer";
// import {changeStep, getTypeOfStructure} from "../redux/actions";

const Comments = () => {
    // const dispatch = useDispatch();
    return (
        <div className="comments-footer">
            <div className="wrapper-comments">
                <div className="wrapper-info">
                    Выводим комментарий
                </div>




                <div className="wrapper-box">

                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>


                    {/*<div>*/}
                    {/*    <Comment/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Comment/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Comment/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Comment/>*/}
                    {/*</div>*/}
                </div>







            </div>
            <Footer/>
        </div>
    )
}

export default Comments;