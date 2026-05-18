import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/Chatmessages';
import './App.css'

      //def chat componets
      
function App()
  {
  const [chatMessages,setChatMessages] = useState([]);

  //const [chatMessages,setChatMessages] = array;
  //const chatMessages = array [0];
  //const setChatMessages = array[1];

  return(
    <div
      className = "app-container"
    >
    <ChatMessages 
      chatMessages = {chatMessages}
    />
            
    <ChatInput 
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages}
    />
    <a href = "https://www.instagram.com/muhsilnr/" 
      target="_blank">Click here: Insta id: muhsilnr</a>
    <a href = "https://www.linkedin.com/in/muhsil-nr-028a51301/" 
      target="_blank">Click here: Linkedin
    </a>
    <a href = "https://github.com/mhlohh" 
      target="_blank"
      >Click here: GitHub</a>
    <p className = "builder-name">Build by Muhsil NR</p>

      </div>
    );
}
export default App
