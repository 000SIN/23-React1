import React from "react";
import React from "./Comment";

const comments = [
    {
        name : "신동욱",
        comment: "안녕하세요. 신동욱입니다."
    },
    {
        name : "신동욱2",
        comment: "안녕하세요. 신동욱2입니다."
    },
    {
        name : "신동욱3",
        comment: "안녕하세요. 신동욱3입니다."
    },
]
/function Comment(props) {
    return (
        <div>
          {comments.mpa((foo) => {
            return (
                <Comment name={foo.name} comment={foo.comment}/>
            )
          })}
        </div>
    )
}

export default CommentList;