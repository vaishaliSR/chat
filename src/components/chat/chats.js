import React from 'react';
import {render} from 'react-dom';
import './chat.css';
//import '../components/fonts/header.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Icon from './send.png'

class Chat extends React.Component {
  render () {
    return (
        <div className="section2">
        
                  <div className="userInfoheader" id = "next">
                    
                  </div>
                 <div className="block chatbox_parent" id="messages">
                   
                 </div>
                 <div className="block">
                   <form>
                    <div className="inputBox" id="m">
                       <div className="input_parent"><input type="text" name="fname" className="input" autocomplete="off" /> </div>
                      <div className="send"> <button> <img src={Icon} /></button></div>
                    </div>
                    </form>
                 </div>
        
                 </div>
    );
}
}

module.exports = Chat;