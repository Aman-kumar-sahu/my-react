import React, { useState } from 'react'
import Tweet from './Component/Tweet'
import '../src/Component/Tweet.css'
const App = () => {
  const [tweets,setTweets]=useState([{
    id:1,
    name:'Amabani',
    tweethandle:'mukambani',
    tweet:'This is Indias reachest man.',
    likes:0
  },{
    id:2,
    name:'Akshay',
    tweethandle:'akkykumar',
    tweet:'This is Indias best actor.',
    likes:0
  },{
    id:3,
    name:'Sahin',
    tweethandle:'sTendulkar',
    tweet:'This is Indias best cricket player.',
    likes:0
  },{
    id:4,
    name:'Dravid',
    tweethandle:'rahulDravid',
    tweet:'This is Indias test match wall.',
    likes:0
  }
  ]);
  const handleLike=(id)=>{
    const latestTweet=[...tweets];
    const index=tweets.findIndex(elem=>elem.id===id);
    latestTweet[index].likes+=1;
    setTweets(latestTweet);
  }
  const handleDis=(id)=>{
    const latestTweet=[...tweets];
    const index=tweets.findIndex(elem=>elem.id===id);
    if(latestTweet[index].likes>0){
    latestTweet[index].likes-=1;
    }
    setTweets(latestTweet);
  }
  const renderTweet=()=>{
    return tweets.map(item=>{
     return <Tweet tweet={item} handleLike={handleLike} handleDis={handleDis}/>
    })
  }
  return (
    <div id="app">
     {renderTweet()}
    </div>
  )
}

export default App