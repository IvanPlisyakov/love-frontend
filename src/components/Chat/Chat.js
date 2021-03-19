import React from 'react';
import './Chat.css';

import WindowHeader from '../WindowHeader/WindowHeader';
import ProfileCard from '../ProfileCard/ProfileCard';

import { Link } from 'react-router-dom';

function Chat(props) {
  const [overlayActiveIs, setOverlayActiveIs] = React.useState(false);
  const messages = React.useRef();
  React.useEffect(() => {
    messages.current.scrollTop = messages.current.offsetHeight;
  }, []);

  const middleComponent = (
    <div className="messages__chat messages__chat_size_small" onClick={() => {setOverlayActiveIs(true)}}>
      <img className="messages__chat-image messages__chat-image_size_small" src={props.otherProfile.image[0]} alt="" />
      <p className="messages__chat-name messages__chat-name_size_small">{props.otherProfile.name}</p>
    </div>
  );

  return (
  <>
    <section className="chat">
      <WindowHeader middleComponent={middleComponent}/>
      <div className="chat__messages" ref={messages}>
        {
          props.chat
          ? props.chat.map((message, i) => {
              if(message.otherIs !== undefined) {
                return (
                  <div className="chat__message">
                    <div className={`chat__message-block ${message.otherIs ? 'chat__message-block_otherIs_true' : 'chat__message-block_otherIs_false'}`} key={i}>
                      <p className="chat__message-text">{message.text}</p>
                    </div>
                  </div>
                )
              } else {
                switch (message.type) {
                  case 'date':
                    return (
                      <p className="chat__message-date">{message.text}</p>
                    )
                    default:
                      return <></>;
                }
              }
            })
          : <></>
        }
      </div>
      <div className="chat__input">
        <p>Астрономия</p>
      </div>
    </section>
    <div className={`chat__overlay ${overlayActiveIs ? 'chat__overlay_active' : ''}`} onClick={() => {setOverlayActiveIs(false)}}>
      <div className="chat__overlay-column">
        <ProfileCard card={props.otherProfile}/>
      </div>
    </div>
  </>
  );
}

export default Chat;

/*
    <Link className="messages__chat" to="/chat" key={i}>
      <img className="messages__chat-image" src={chat.otherImage} alt="" />
      <p className="messages__chat-name">{chat.otherName}</p>
      <p className="messages__chat-message">{chat.lastMessegeOtherIs ? '' : (<span className="messages__chat-message-your">Вы: </span>)}{chat.lastMessege}</p>
    </Link>
*/
