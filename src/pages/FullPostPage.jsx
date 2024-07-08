import React from 'react';
import NavBar from '../components/NavBar';
import Post from '../components/Post';
import TickerOrder from '../components/TicketOrder';
import '../assets/FullPostPage.css';

function FullPostPage() {
  const postProps = {
    date: "2024-06-30T12:00:00Z",
    userName: "John Doe",
    authorImg: "extract-component/src/components/1.png",
    postImg: "logo.svg",
    content: "The Betty was a creature of habit and she thought she liked it that way. That was until Dave showed up in her life. She now had a choice to...",
    comments: 22,
    shares: 40,
    initialLiked: true
  };
  const ticketProps = {
    date: "2024-08-01T03:57:00Z",
    availableTickets: 30,
    ticketOrder: 20,
    timeIconSrc: "1.png",
    star: 4
  };
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="left-side">
          <Post {...postProps}/>
        </div>
        <div className="right-side">
          <TickerOrder {...ticketProps}/>
        </div>
      </div>
    </div>
  );
}

export default FullPostPage;
