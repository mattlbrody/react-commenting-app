import React from 'react';

const Comments = (props) => {
  const commentList = props.comments.map(comment => {
    return (
      <div className="ui card" key={comment.id}>
        <div className="content">
          <div className="header">{comment.subject}</div>
          <div className="meta">
            <span className="right floated time">{comment.date}</span>
          </div>
          <div className="description">
            <p>{comment.comment}</p>
          </div>
        </div>
        <div className="extra content">
          <i onClick={e => props.newLike(1)} className="thumbs up outline icon"></i>
          <span className="category">Likes: {comment.likes}</span>
          <div className="right floated author">
            <img alt="" className="ui avatar image" src={comment.avatar} /> {comment.user}
          </div>
        </div>
      </div>
    );
  })
  return (
    <div>
      {commentList}
    </div>
  );
}

export default Comments;