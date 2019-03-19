import React, { Component } from 'react';
import Comments from './Comments';
import NewCommentForm from './NewCommentForm';

class App extends Component {
  state = { comments: [
    {
      user: 'Mario',
      subject: 'Hobbies',
      comment: 'I like to race and hit people with turtle shells!',
      date: '2 days ago',
      avatar: 'http://codifyacademy.com/mario.png',
      likes: 11,
      id: 1
    },
    {
      user: 'Toad',
      subject: 'things I regret',
      comment: 'this is the wrong castle again...my bad...',
      date: '1 day ago',
      avatar: 'http://codifyacademy.com/toad.png',
      likes: 100,
      id: 2
    }
  ],
    newComment: {
      user: '',
      subject: '',
      comment: '',
      date: '1 second ago',
      avatar: '',
      likes: 0,
      id: Math.random()
    }
  }

  addComment = (e) => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: {
        user: '',
        subject: '',
        comment: '',
        date: '1 second ago',
        avatar: '',
        likes: 0,
        id: 3
      }
    })
  }

  updateUser = (e) => {
    this.setState(prevState => ({
      newComment: {
        ...prevState.newComment,
        user: e
      }
    }))
    
  }

  updateSubject = (e) => {
    this.setState(prevState => ({
      newComment: {
        ...prevState.newComment,
        subject: e
      }
    }))
  }

  updateComment = (e) => {
   this.setState(prevState => ({
      newComment: {
        ...prevState.newComment,
        comment: e
      }
   }))
  }

  updateAvater = (e) => {
    this.setState(prevState => ({
      newComment: {
        ...prevState.newComment,
        avatar: e
      }
    }))
  }

  newLike = (e) => {
    console.log(e)
    this.setState(prevState => ({
      newComment: {
        ...prevState.newComment,
        likes: e
      }
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="ui segment">
        <h1>Commenting App</h1>
        </div>
        <div className="ui grid">
          <div className="row">
            <div className="eight wide column">
              <NewCommentForm 
                newComment={this.state.newComment}
                addComment={this.addComment}
                updateUser={this.updateUser}
                updateSubject={this.updateSubject}
                updateComment={this.updateComment}
                updateAvater={this.updateAvater}
              />
            </div>
            <div className="eight wide column">
              <Comments 
                comments={this.state.comments}
                newLike={this.newLike}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
