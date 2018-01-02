import React from 'react';
import {render} from 'react-dom';
import Header from '../components/header/header';
import Chat from '../components/chat/chats';
import $ from 'jquery';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render () {
     
    return <div>
        <Header />
        <Chat />
        </div>
     
  }
}

render(<App />, document.getElementById('app'));
