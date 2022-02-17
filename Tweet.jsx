import React from 'react'
import './Tweet.css'
const Tweet = (props) => {
  // console.log(props.tweet);
  return (
    <div className="container">
      <div className="box1">
        <h3>{props.tweet.name}</h3>
        <h4>{props.tweet.tweethandle}</h4>
        <p>{props.tweet.tweet}</p>
      </div>
      <div className="box2">
        <h4>{props.tweet.likes}</h4>
      </div>
      <div className="btn">
        <button onClick={()=>props.handleLike(props.tweet.id)}>Like</button>
        <button onClick={()=>props.handleDis(props.tweet.id)}>DisLike</button>
      </div>
    </div>
    // <><h1>hi</h1>
    // </>
  )
}

export default Tweet