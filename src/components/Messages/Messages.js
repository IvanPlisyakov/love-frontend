import React from 'react';
import './Messages.css';

import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

import { Link } from 'react-router-dom';

function Messages(props) {
  return (
    <section className="messages">
      <Header />
      <div className="messages__couples">
        <h3 className="messages__title">Новые пары</h3>
        <div className="messages__couples-column">
          {props.couples
            ? props.couples.map((couple, i) => {
                return (
                  <div className="messages__couple" key={i}>
                    <img className="messages__couple-image" src={couple.image[0]} alt="" />
                    <p className="messages__couple-name">{couple.name}</p>
                  </div>
                )
              })
            : <></>
            }
        </div>
      </div>
      <div className="messages__chats">
        <h3 className="messages__title">Сообщения</h3>
        <div className="messages__chats-column">
          {
            props.chats 
            ? props.chats.map((chat, i) => {
              return (
                <Link className="messages__chat" to="/chat" key={i}>
                  <img className="messages__chat-image" src={chat.otherImage} alt="" />
                  <p className="messages__chat-name">{chat.otherName}</p>
                  <p className="messages__chat-message">{chat.lastMessegeOtherIs ? '' : (<span className="messages__chat-message-your">Вы: </span>)}{chat.lastMessege}</p>
                </Link>
              )
            })
            : <></>
          }
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default Messages;

/*

*/