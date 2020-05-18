import React, {useState, useRef, useEffect} from 'react';

function HookCounter() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  );
}

export default HookCounter;
