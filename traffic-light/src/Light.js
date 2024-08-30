import React, { useState } from "react";
import { useEffect } from "react";

function Light({ id, size,color, duration,currentState, setCurrentState, time}) {
  // 0 --> Red
  // 1 --> Orange
  // 2 --> Green
  

  return (
    
    <div
      className="light"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        color: color,
        opacity: id === currentState ? 1 : 0.2,
      }}
    >
      
    </div>
  );
}
export default Light;
