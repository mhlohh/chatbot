import RobotProfileImage from '../assets/robot.png';
import dayjs from 'dayjs';
import UserProfileImage from '../assets/profile.jpg';
import './Chatmessage.css';
export function ChatMessage({ message, sender }) {

  //const message = props.message;
  //const sender = props.sender;
  //const {message,sender} = props;
  /*if (sender === 'robot')
{
  return (
    <div>
      <img src = "robot.png" width = "50"/>
      {message}
    </div>
  );
}
  */
  const time = dayjs().valueOf();
  return (

    <div
      className={
        sender === 'user'
          ? 'chat-message-user'
          : 'chat-message-robot'
      }
    >
      {sender === 'robot' && (
        <img src={RobotProfileImage}
          className="chat-message-profile"
          alt="User profile"
        />
      )}
      <div className={sender === 'robot' ? 'chat-robot-text' : 'chat-user-text'}>
        {message}
        <p>{dayjs(time).format('h:mma')}</p>
      </div>

      {sender === 'user' && (
        <img src={UserProfileImage}
          className="chat-message-profile"
          alt="Robot avatar"
        />

      )}

    </div>
  );

}
