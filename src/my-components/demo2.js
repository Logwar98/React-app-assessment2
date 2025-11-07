// demo2.js
import React from 'react';
import phone1 from './phone1.jpg';
import phone2 from './phone2.jpg';
import phone3 from './phone3.jpg';

const Demo2 = () => {
  return (
    <div>
      <h1>Advanced JS - Demo 2: Drag and Drop Multiple Items</h1>
      <p>Drag any image between the two boxes.</p>

      <div
        id="div1"
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragoverHandler(e)}
        style={styles.box}
      >
        <img
          id="img1"
          src={phone1}
          alt="Phone 1"
          draggable="true"
          onDragStart={(e) => dragstartHandler(e)}
          width="88"
          height="88"
        />
        <img
          id="img2"
          src={phone2}
          alt="Phone 2"
          draggable="true"
          onDragStart={(e) => dragstartHandler(e)}
          width="88"
          height="88"
        />
        <img
          id="img3"
          src={phone3}
          alt="Phone 3"
          draggable="true"
          onDragStart={(e) => dragstartHandler(e)}
          width="88"
          height="88"
        />
      </div>

      <div
        id="div2"
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragoverHandler(e)}
        style={styles.box}
      ></div>
    </div>
  );
};

// Drag and Drop Handlers
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Inline styles
const styles = {
  box: {
    float: 'left',
    width: '150px',
    minHeight: '150px',
    margin: '10px',
    padding: '10px',
    border: '1px solid black'
  }
};

export default Demo2;