import { useState} from 'react';
 import {Chatbot} from 'supersimpledev';
 import LoadingSpinner from '../assets/loading-spinner.gif';
 import './Chatinput.css';
 
export function ChatInput({chatMessages,setChatMessages})
      {
        const [inputText,setInputText] = useState('');

       async function sendMessage()
        {
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
            }];
          setChatMessages([
            ...newChatMessages,
                // This creates a temporary Loading... message.
                // Because we don't save this message in newChatMessages,
                // it will be remove later, when we add the response.
                {
                    message: <img src = {LoadingSpinner} className = "loading-gif"/>,
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
              

          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
            }
          ]);
          setInputText('')

        }

        function saveInputText(event)
        {
          setInputText(event.target.value);
        }
        function inputTextKey(event)
        {
          if(event.key === 'Enter')
          {
            sendMessage();
            setInputText('');
          }
          if(event.key === 'Escape')
          {
            setInputText('');
          }
        }
        function clearMessages()
        {
          setChatMessages([]);
        }
           
        return(
          <div
          className = "chat-input-container"
          >
            <input 
              className = "chat-input"
              type = "text" 
              placeholder = "Send a message to Chatbot" 
              //THis is element gives event as atributes to the function (saveInputText)
              //the value from the textbox
              onChange = {saveInputText}
              value = {inputText}
              //This check for keys like(enter,esc..) then input the text based on that
              onKeyDown = {inputTextKey}
             
            />

            <button
              onClick = {sendMessage}
              className = "send-button"
            >Send</button>
            <button
              className = "clear-button"
              onClick={clearMessages}
            >
              Clear
            </button>
          </div>
        );
      }