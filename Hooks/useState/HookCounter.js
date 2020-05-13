import React, {useState} from 'react';

function HookCounter() {
  const [count, updateCount] = useState(0);
  return (
    <div>
      <button onClick={() => updateCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
