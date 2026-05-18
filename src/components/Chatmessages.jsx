import {useRef,useEffect} from 'react';
 import { ChatMessage } from '../components/Chatmessage';
 import './Chatmessages.css';
 
export function ChatMessages({chatMessages})
      {
        //This ref is a hook in react which save the html componet inside eg:(div)
        //While Intializign put in a variable then default value null
        const chatMessagesRef = useRef(null); //save an HTML element from the component
        //Usef Effect is a React hook which update the code if there is a change in the certain code .
        // It is an array so it have two values change to made after changing somehting on the page
        //then the element the changes which triggers the function eg(React.useEffect(()=>{the change after the trigger change},[the list of change trigger]));
        useEffect(()=>{ //Run code after componet is created or updated
          /*for going into the lowest scroll in page we need to put the useRef
           current value from the div on below (className = chat-messages-container) put ref as
           artribute and input the variable that stores the useRef(null) after that current chatMEssages 
           store in a variable const*/
          const containerElem = chatMessagesRef.current;
          //This where the it checke weather its null
          if (containerElem){
            //it put the scrolltop to bottom that is height of scroll 
            //THis run if there is change in the chatMessages
            containerElem.scrollTop = containerElem.scrollHeight;
          }
          
        },[chatMessages]);

        return(
          <div
            className = "chat-messages-container"
            //This is the useRef hook value
            ref = {chatMessagesRef}
          >
           <p className = "default-message">{chatMessages.length === 0 && ("Welcome to the chatbot project! Send a message using the textbox below.")}</p>
            {
              chatMessages.map((chatMessage)=> {
          return (
                  <ChatMessage 
                    message = {chatMessage.message}
                    sender = {chatMessage.sender}
                    key = {chatMessage.id}
                  />
                );
              })
            }
          </div>
        );
      }