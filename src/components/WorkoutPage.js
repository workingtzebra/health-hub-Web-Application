import React, { useState } from 'react';

function WorkoutPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      sessionStorage.setItem('intervalId', interval);
    } else {
      clearInterval(parseInt(sessionStorage.getItem('intervalId')));
    }
  };

  return (
    <div>
      <h1>Workout Page</h1>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <p>Timer: {timer} seconds</p>
    </div>
  );
}

export default WorkoutPage;