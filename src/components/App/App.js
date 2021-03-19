import React from 'react';
import './App.css';

import {
  Route, Switch
} from 'react-router-dom';

import Main from '../Main/Main';
import SearchSetting from '../SearchSetting/SearchSetting'
import Messages from '../Messages/Messages';
import Navigation from '../Navigation/Navigation';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

const data = [
  {
    name: "Никитаcfffffffff",
    hobbies: ["Dota2", "CS Go", "Астрономия"],
    year: "5",
    image: [
      "https://sun9-40.userapi.com/impg/1ZUyjsewRWNEcalk1dPOiu9QTadzw0oOkE7QVA/9G-IL9gjPUg.jpg?size=1062x1080&quality=96&sign=456381c87274db63ecaee0d9969515ef&type=album",
      "https://sun9-32.userapi.com/impg/c857324/v857324018/1df1a3/WopkhEDG6hI.jpg?size=720x1280&quality=96&sign=80778a868fbf576f1233cdfce5b1ec90&type=album",
    ],
    city: "Красноярск"
  },
  {
    name: "Миша",
    hobbies: ["Dota2", "CS Go", "Даша"],
    year: 15,
    image: [
      "https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album"
    ],
    city: "Москва",
  },
  {
    name: "Никита",
    hobbies: ["Dota2", "CS Go", "Астрономия"],
    year: "5",
    image: [
      "https://sun9-40.userapi.com/impg/1ZUyjsewRWNEcalk1dPOiu9QTadzw0oOkE7QVA/9G-IL9gjPUg.jpg?size=1062x1080&quality=96&sign=456381c87274db63ecaee0d9969515ef&type=album",
      "https://sun9-32.userapi.com/impg/c857324/v857324018/1df1a3/WopkhEDG6hI.jpg?size=720x1280&quality=96&sign=80778a868fbf576f1233cdfce5b1ec90&type=album",
    ],
    city: "Красноярск",
  },
  {
    name: "Миша",
    hobbies: ["Dota2", "CS Go", "Даша"],
    year: 15,
    image: [
      "https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album"
    ],
    city: "Москва",
  },
  {
    name: "Никита",
    hobbies: ["Dota2", "CS Go", "Астрономия"],
    year: "5",
    image: [
      "https://sun9-40.userapi.com/impg/1ZUyjsewRWNEcalk1dPOiu9QTadzw0oOkE7QVA/9G-IL9gjPUg.jpg?size=1062x1080&quality=96&sign=456381c87274db63ecaee0d9969515ef&type=album",
      "https://sun9-32.userapi.com/impg/c857324/v857324018/1df1a3/WopkhEDG6hI.jpg?size=720x1280&quality=96&sign=80778a868fbf576f1233cdfce5b1ec90&type=album",
    ],
    city: "Красноярск",
  },
  {
    name: "Миша",
    hobbies: ["Dota2", "CS Go", "Даша"],
    year: 15,
    image: [
      "https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album"
    ],
    city: "Москва",
  },
  {
    name: "Никита",
    hobbies: ["Dota2", "CS Go", "Астрономия"],
    year: "5",
    image: [
      "https://sun9-40.userapi.com/impg/1ZUyjsewRWNEcalk1dPOiu9QTadzw0oOkE7QVA/9G-IL9gjPUg.jpg?size=1062x1080&quality=96&sign=456381c87274db63ecaee0d9969515ef&type=album",
      "https://sun9-32.userapi.com/impg/c857324/v857324018/1df1a3/WopkhEDG6hI.jpg?size=720x1280&quality=96&sign=80778a868fbf576f1233cdfce5b1ec90&type=album",
    ],
    city: "Красноярск",
  },
  {
    name: "Миша",
    hobbies: ["Dota2", "CS Go", "Даша"],
    year: 15,
    image: [
      "https://sun9-11.userapi.com/impg/F_s_O5t7l3sfj4uMGyD8wZW4jmreonXeOE2_XQ/Y4qnRv8K0iY.jpg?size=810x1080&quality=96&sign=a9b2c6968cc0bd2c1a7574ea45c28185&type=album"
    ],
    city: "Москва",
  },
]

const chats = [
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
  {
    otherId: 1,
    otherImage: "https://sun9-17.userapi.com/impf/c851424/v851424313/18cc65/BPEG0WWRYd4.jpg?size=1280x1280&quality=96&sign=771f08c43f68d0f1eb22e933619e8d46&type=album",
    otherName: "Марк",
    lastMessegeOtherIs: false,
    lastMessege: "Привет. Как дела?",
  },
]

const chat = [
  {type: "date", text: "18 марта"},
  {otherIs: false, text: "Привет. Как дела?"},
  {otherIs: true, text: "Норм.dddddddddddddddddddddddddddddddddd Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: false, text: "Купил себе только доширак(("},
  {type: "date", text: "18 марта"},
  {otherIs: false, text: "Привет. Как дела?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: false, text: "Купил себе только доширак(("},
  {type: "date", text: "18 марта"},
  {otherIs: false, text: "Привет. Как дела?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: true, text: "Норм. Недавно купил себе новую машину. Ты как?"},
  {otherIs: false, text: "Купил себе только доширак(("},
]

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main cards={data} />
        </Route>
        <Route exact path="/search-setting">
          <SearchSetting />
        </Route>
        <Route exact path="/messeges">
          <Messages couples={data} chats={chats} />
        </Route>
        <Route exact path="/chat">
          <Chat chat={chat} otherProfile={data[0]}/>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//   window.addEventListener('resize', handleWindowResize);
// onMouseMove={changeCoordinates}
//  style={{left: coordinates.x}}