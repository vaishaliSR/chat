import React from 'react';
import {render} from 'react-dom';
import './header.css';
//import '../components/fonts/header.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Chat from '../chat/chats';
import User from '../user/user';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <Router> 
      <div className="block green shadow">
         <div className="app-container">

            <div className="header f50 clearfix">
               <div className="whatsapp"><p>WhatsApp</p></div>
               <div className="icons">
                  <i className="glyphicon glyphicon-search icon_child" aria-hidden="true"></i>
                  <i className="glyphicon glyphicon-option-vertical icon_child" aria-hidden="true"></i>
               </div>
            </div>

            <div className="navigation clearfix">
               <div className="chats center border-bottom">
                  <p className="">CHATS</p>
               </div>
               <div className="users center">
                  <p className="">USERS</p>
               </div>
            </div>

         </div>
      </div>
      </Router>
      
      );
  }
}

module.exports = Header;
