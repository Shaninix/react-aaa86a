import React from 'react';
import { render } from 'react-dom';
import Controls from './Controls/index.js';
import './style.scss';

/**
 * Mock: https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3d3f154277a842ef2f1b06ccbf854efc-1619951517276/fe_mock.png
 */

/**
 * Message object
 * @typedef {Object} message
 * @property {string} content - The message content.
 * @property {string} user - The message sender.
 * @property {number} timestamp - The message timestamp in millieseconds.
 * @property {string} id - The message id.
 */

const App = () => {
  const [messages, setMessage] = React.useState([]);

  window.Chat.onMessage((message) => {
    messages.push(message);
    console.log(messages);
    console.log([...messages]);
    setMessage([...messages]);
  });

  return (
    <div>
      <div>
        {messages.map((message) => {
          return (
            <div className="message">
              <p>{message.user}</p>
              <p>{message.content}</p>
              <p>{Date(message.timestamp)}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Controls />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
