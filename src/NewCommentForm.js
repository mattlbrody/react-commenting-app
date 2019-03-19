import React from 'react';

const NewCommentForm = (props) => {
  return (
    <form className="ui form" onSubmit={props.addComment}>
      <div className="field">
        <label>Name</label>
          <div className="field">
            <input 
              type="text" 
              placeholder="First Name" 
              value={props.newComment.user} 
              onChange={e => props.updateUser(e.target.value)} 
            />
          </div>
      </div>
      <div className="field">
        <label>Subject</label>
          <div className="field">
            <input 
              type="text" 
              placeholder="Subject" 
              value={props.newComment.subject}
              onChange={e => props.updateSubject(e.target.value)}
            />
          </div>
      </div>
      <div className="field">
        <label>Comment</label>
          <div className="field">
            <textarea 
              placeholder="Comment" 
              value={props.newComment.comment}
              onChange={e => props.updateComment(e.target.value)}
            />
          </div>
      </div>
      <div className="field">
        <label>Image</label>
          <div className="field">
            <input 
              type="text" 
              placeholder="Image Link URL" 
              value={props.newComment.avatar}
              onChange={e => props.updateAvater(e.target.value)}
            />
          </div>
      </div>
      <button className="ui primary button">Add New Comment</button>
    </form>
  );
}

export default NewCommentForm;