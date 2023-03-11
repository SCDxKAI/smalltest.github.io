import React, { useState } from "react";
import photo from './android-chrome-192x192.png'
import photo2 from './upside-down-face.png'

function ShowContent() {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 1000, y: 291 });


  function handleClick() {
    setShowFirstContent(!showFirstContent);
    setIsVisible(false);
  }

  function handleMouseMove(event) {
    setPosition({
      x: Math.floor(Math.random() * (window.innerWidth-100)),
      y: Math.floor(Math.random() * (window.innerHeight-100))
    });
  }

  return (
    <div id="content">
      {showFirstContent ? (
        <div>
          <h1>Are you an idiot?</h1>
        </div>
      ) : (
        <div>
          <h1>I knew it <img src={photo2} alt=";" /> <img src={photo} alt=".-." /></h1>   
        </div>
      )}
      <div>
      {isVisible && <button onClick={handleClick}>Yes</button>}
      {isVisible && <button style={{ position: "absolute", left: position.x, top: position.y }}onMouseMove={handleMouseMove}>No</button>}
      </div>
    </div>
  );
}

export default ShowContent;
