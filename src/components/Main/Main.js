import React from 'react';
import './Main.css';

import Header from '../Header/Header'
import ProfileCard from '../ProfileCard/ProfileCard';
import Navigation from '../Navigation/Navigation'


function Main(props) {
  console.log(props.cards)
  //let cards = [];
  /*const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setCards(
      props.cards.map((item, i) => {
        return (
          <ProfileCard card={item} key={i} deleteCard={deleteCard} />
        )
    }).reverse()
    )
  }, []);

  function deleteCard() {
    //cards = cards.reverse().slice(1)
    setCards(cards.reverse().slice(1))
    console.log(cards)
  }*/

  /*setCards(
    props.cards.map((item, i) => {
      return (
        <ProfileCard card={item} key={i} deleteCard={deleteCard} />
      )
  }).reverse())*/

  //console.log(cards)

  /*setCards(props.cards.map((item, i) => {
    return (
      <ProfileCard card={item} key={i} />
    )
  }));*/

  //deleteCard();
  return (
    <section className="main">
      <Header />
      <div className="main__column">
      {props.cards 
        ? props.cards.map((item, i) => {
            return (
              <ProfileCard card={item} type="main" key={i} />
            )   
          }).reverse() 
       : <></>
      }
      </div>
      <Navigation />
    </section>
  );
}

export default Main;
//https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album

/*
          <img className="main__profile-image" src="https://avatars.mds.yandex.net/get-zen_doc/2463892/pub_5e0c6f743f548700ad63a645_5ebbd18371f5831b1137598a/scale_1200" alt=""/>
          <img className="main__profile-image" src="https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album" alt=""/>
          <img className="main__profile-image" src="https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album" alt=""/>
          */