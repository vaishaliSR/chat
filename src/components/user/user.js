import React from 'react';
import {render} from 'react-dom';
//import './chat.css';
//import '../components/fonts/header.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Icon from './profilePicture_sm.jpg'

class User extends React.Component {
  render () {
    return (
      <div className="block section1">
         <div className="app-container">

            <div className="user clearfix" id="profile">
             
            </div>

         </div>
      </div>
    );
}
}

module.exports = User;