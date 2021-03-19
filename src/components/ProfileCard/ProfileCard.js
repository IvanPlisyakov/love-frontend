import React from 'react';
import './ProfileCard.css';

import rejectImage from '../../images/profile-card__control-button-img_reject.svg';
import replyImage from '../../images/profile-card__control-button-img_reply.svg';

function ProfileCard(props) {
  const profile = React.useRef();
  console.log(profile)
  const item = React.useRef();
  const info = React.useRef();
  const [controlButtonSize, setControlButtonSize] = React.useState(70);
  const [behaviorCard, setBehaviorCard] = React.useState(0);
  const [display, setDisplay] = React.useState("block");

  function scroll() {
    info.current.style.opacity = 1 - profile.current.scrollTop/100 >= 0 ? 1 - profile.current.scrollTop/100 : 0;
    info.current.style.display = profile.current.scrollTop > 100 ? 'none' : 'inline-flex';
    setControlButtonSize(profile.current.scrollTop > 100 ? 60 : 70 - (profile.current.scrollTop/10))
  }

  function handleRejectButton() {
    setBehaviorCard(1);
    setTimeout(setDisplay, 0.7*1000, "none"); 
  }

  function handleReplyButton() {
    setBehaviorCard(2);
    setTimeout(setDisplay, 0.7*1000, "none"); 
  }

  return (
  <div style={{display: display}} className={`profile-card__item ${behaviorCard === 1 && 'profile-card__item_reject'} ${behaviorCard === 2 && 'profile-card__item_reply'}`} ref={item}>
    <div className="profile-card__profile" ref={profile} onScroll={scroll}>
      <img className="profile-card__profile-image" src={props.card.image[0]} alt=""/>
      <div className="profile-card__hobbies">
        {props.card.hobbies.map((i) => {
          return (
            <div className="profile-card__hobbie" key={i}>
              <p className="profile-card__hobbie-text">{i}</p>
            </div>
          )
        })}
      </div>
      {props.card.image.slice(1).map((i) => {
        return (
          <img className="profile-card__profile-image" src={i} alt="" key={i} />
        )
      })}
    </div>
    <div className="profile-card__support">
      <div className="profile-card__info" ref={info}>
        <div className="profile-card__info-user">
          <p className="profile-card__info-user-text profile-card__info-user-text_name">{props.card.name}</p>
          <p className="profile-card__info-user-text profile-card__info-user-text_year">, {props.card.year}</p>
        </div>
        <p className="profile-card__info-user-text profile-card__info-text_city">{props.card.city}</p>
      </div>
      { props.type === 'main' && 
        <div className="profile-card__control">
          <button style={{width: controlButtonSize, height: controlButtonSize}} className="profile-card__control-button profile-card__control-button_type_reject" onClick={handleRejectButton}>
            <img style={{width: controlButtonSize/2 - 5 , height: controlButtonSize/2 - 5}} className="profile-card__control-button-img_reject" src={rejectImage} alt=""/>
          </button>
          <button style={{width: controlButtonSize, height: controlButtonSize}} className="profile-card__control-button profile-card__control-button_type_reply" onClick={handleReplyButton}>
            <img style={{width: controlButtonSize/2, height: controlButtonSize/2}} className="profile-card__control-button-img_reply" src={replyImage} alt="" />
          </button>
        </div>
      }
    </div>
  </div>
  );
}

export default ProfileCard;