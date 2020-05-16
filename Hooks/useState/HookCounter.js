import React, {useState} from 'react';

// -----------------For normal values like integer------------------------------------

// function HookCounter() {
//   const [count, updateCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => updateCount(count + 1)}>Count {count}</button>
//     </div>
//   );
// }

// -----------------For object --------------------------------------------------------

// const HookCounter = function () {
//   const [name, setName] = useState({firstName: '', lastName: ''});

//   return (
//     <div>
//       <input
//         type="text"
//         value={name.firstName}
//         onChange={(e) => setName({...name, firstName: e.target.value})}
//       />
//       <input
//         type="text"
//         value={name.lastName}
//         onChange={(e) => setName({...name, lastName: e.target.value})}
//       />
//       <h2>First name is {name.firstName}</h2>
//       <h2>Last name is {name.lastName}</h2>
//       <h2>{JSON.stringify(name)}</h2>
//     </div>
//   );
// };

// --------------------For Array ------------------------------------------------------------

const HookCounter = function () {
  const [items, setItems] = useState([]);

  const addItem = function () {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.ceil(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounter;
