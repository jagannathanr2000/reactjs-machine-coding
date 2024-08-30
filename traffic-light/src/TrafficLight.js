import React, { useState, useEffect } from "react";
import Light from "./Light";
import Timer from "./Timer";

function TrafficLight() {

  const [currentState, setCurrentState] = useState(2);
  const [time, setTime] = useState(0);

  const lightConfig = [
    {
      id: 0,
      color: "red",
      duration: 10000,
      size: 70,
    },
    {
      id: 1,
      color: "orange",
      duration: 3000,
      size: 70
    },
    {
      id: 2,
      color: "lightgreen",
      duration: 10000,
      size: 70
    }
  ]
  useEffect(() => {
    setTime(Math.floor(lightConfig[currentState].duration/1000));
  },[currentState])

  useEffect(() => {
    // const currentDuration = currentState === 'green' ? lightConfig[2].duration : currentState === 'red' ? lightConfig[0].duration : lightConfig[1].duration;
    // const intervalDuration = Math.floor(currentDuration / 1000);
    
    const timeInterval = setInterval(() => {

      setTime(time-1)

    },1000)
    

    return () => clearInterval(timeInterval)

  },[time])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (currentState === 2) {
        
        setCurrentState(1)
        
      } else if (currentState === 0) {
        
        setCurrentState(2)
        
      } else {
        
        setCurrentState(0)
        
      }
    }, lightConfig[currentState].duration);

    return () => clearTimeout(interval)
  }, [currentState]);

  return (
    <>
    <h2 style={{
      "color":lightConfig[currentState].color
    }}>
        {
          currentState === 2 ? 'Go👋' : currentState === 0 ? 'Stop🫷🏼' : 'Ready⌛'
        }
      </h2>

      <div className="light-container">
      
      <Light
        {...lightConfig[0]}
        
        currentState={currentState}
        changeState={setCurrentState}
        setCurrentState={setCurrentState}
        
        
      />
      <Light

        {...lightConfig[1]}

        currentState={currentState}
        changeState={setCurrentState}
        setCurrentState={setCurrentState}
       
        
      />
      <Light
        {...lightConfig[2]}

        currentState={currentState}
        changeState={setCurrentState}
        setCurrentState={setCurrentState}
        
        
      />
      <Timer value={time} />
    </div>
    
    </>
    
  );
}
export default TrafficLight;
