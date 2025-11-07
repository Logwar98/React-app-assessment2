import React, { useEffect } from 'react';
import { output } from './chatbot';
import './chatbot.css';



function Demo1Chatbot() {

useEffect(() => {
  const inputField = document.getElementById("input");
  if (!inputField) return;

  const handler = (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  };

  inputField.addEventListener("keydown", handler);

  // cleanup
  return () => {
    inputField.removeEventListener("keydown", handler);
  };
}, []);

  return (
    <>
      <div id="container" className="container">
        <div id="chat" className="chat">
          <div id="messages" className="messages"></div>
          <input id="input" type="text" placeholder="Say something..." autoComplete="off" autoFocus={true}/>
        </div>
      </div>
    </>
  );
}

export default Demo1Chatbot;


