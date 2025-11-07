import React, { useState } from 'react';
import Demo1Chatbot from "./demo1/demo1";
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';

const DemoComponent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [hoverId, setHoverId] = useState(null);

  const handleClick = (buttonId, callback) => {
    setActiveButton(buttonId);
    if (callback) callback();
  };

  const startAuto = () => {
    console.log("Auto started");
  };

  const getButtonStyle = (id) => {
    // if hover state -> orange
    if (hoverId === id) {
      return { backgroundColor: 'orange', color: 'darkblue' };
    }
    // normal blue
    return { backgroundColor: 'lightblue', color: 'darkblue' };
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      <div id="collapse_button" className="ms-3 mt-4">
        <div id="button_words" className="d-flex flex-column gap-3">

          <button
            id="button_words1"
            style={getButtonStyle("button_words1")}
            onMouseEnter={() => setHoverId("button_words1")}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleClick("button_words1", startAuto)}
            className="btn rounded-0 border border-black border-3"
            data-bs-toggle="collapse"
            data-bs-target="#Demo1"
          >
            Demo1
          </button>

          <button
            id="button_words2"
            style={getButtonStyle("button_words2")}
            onMouseEnter={() => setHoverId("button_words2")}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleClick("button_words2")}
            className="btn rounded-0 border border-black border-3"
            data-bs-toggle="collapse"
            data-bs-target="#Demo2"
          >
            Demo2
          </button>

          <button
            id="button_words3"
            style={getButtonStyle("button_words3")}
            onMouseEnter={() => setHoverId("button_words3")}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleClick("button_words3")}
            className={`btn rounded-0 border border-black border-3`}
            data-bs-toggle="collapse"
            data-bs-target="#Demo3"
            aria-expanded="false"
            aria-controls="Demo3"
          >
            Demo3
          </button>

          <button
            id="button_words4"
            style={getButtonStyle("button_words4")}
            onMouseEnter={() => setHoverId("button_words4")}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleClick("button_words4")}
            className={`btn rounded-0 border border-black border-3`}
            data-bs-toggle="collapse"
            data-bs-target="#Demo4"
            aria-expanded="false"
            aria-controls="Demo4"
          >
            Demo4
          </button>

                    <button
            id="button_words5"
            style={getButtonStyle("button_words5")}
            onMouseEnter={() => setHoverId("button_words5")}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleClick("button_words5")}
            className={`btn rounded-0 border border-black border-3`}
            data-bs-toggle="collapse"
            data-bs-target="#Demo5"
            aria-expanded="false"
            aria-controls="Demo4"
          >
            Demo5
          </button>

        </div>
      </div>

      <div id="formContainer" className="my-4 mx-3 w-100 pb-5">
        <div className="collapse collapse-form" id="Demo1" data-bs-parent="#formContainer">
          <Demo1Chatbot />
        </div>

        <div className="collapse collapse-form" id="Demo2" data-bs-parent="#formContainer">
          <Demo2 />
        </div>
        <div className="collapse collapse-form" id="Demo3" data-bs-parent="#formContainer">
          <Demo3 />
        </div>
        <div className="collapse collapse-form" id="Demo4" data-bs-parent="#formContainer">
          <Demo4 />
        </div>
        <div className="collapse collapse-form" id="Demo5" data-bs-parent="#formContainer">
          <Demo5 />
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;
