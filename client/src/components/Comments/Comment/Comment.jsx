import React from "react";
import "./Comment.css"

const Comment = (props) => {
    let name = props.info.name;
    let className = props.info.className;
    let email = props.info.email;
    let comment = props.info.comment;

    return (
        <div>
            <div className={className + " text-white bg-primary mb-3 wrapper-card"}>
                <div className={className + "  card-header"}>{name}</div>
                <div className={className + "  card-body card-box"}>
                    <h5 className={className + " card-title"}>{email}</h5>
                    <div className={className + " card-text text-position"}><div className="text-position">{comment}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Comment;