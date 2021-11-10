import React from "react";
import { useState } from "react";

function Mouse  (props){
  const [postion, setPostion] = useState({ x: 0, y: 0 })
  const handlePostionChange = (event) => setPostion({
    x: event.clientX,
    y: event.clientY
  });
  
  return(
    <div style={{ height: '100vh' }} onMouseMove={handlePostionChange}>
      {props.render(postion)}
      <p>The current little mouse position is ({postion.x}, {postion.y})</p>
    </div>
  )
}

export default Mouse  