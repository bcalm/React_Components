import React, {useEffect, useState} from 'react';
import ShowCoordinate from './ShowCoordinate';

// ----------------updating a particular value whenever it changes--------------------

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('');

//   useEffect(() => {
//     console.log('use effect');
//     document.title = `Clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
//     </div>
//   );
// }

// ----------------unMounting stuff--------------------

// import React, {useState, useEffect} from 'react';

// function ShowCoordinate() {
//   const [xCord, setXCord] = useState(0);
//   const [yCord, setYCord] = useState(0);

//   const logMousePosition = (e) => {
//     setXCord(e.clientX);
//     setYCord(e.clientY);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', logMousePosition);
//     return () => window.removeEventListener('mousemove', logMousePosition);
//   });

//   return (
//     <div>
//       X- {xCord} Y- {yCord}
//     </div>
//   );
// }
// export default ShowCoordinate;


const UseEffect = function () {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <ShowCoordinate />}
    </div>
  );
};

export default UseEffect;
