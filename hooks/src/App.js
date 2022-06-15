import { useState, useEffect } from "react";

// function App() {
//   const [no, setNo] = useState(10);
//   const plus = () => {
//     setNo(no + 1);
//   };
//   const minus = () => {
//     if (no > 0) {
//       return setNo(no - 1);
//     } else {
//       return 0;
//     }
//   };
//   return (
//     <>
//       {/* <div className="hooks">
//         <p className="data">{no}</p>
//         <button
//           className="increasement"
//           onClick={() => {
//             return setNo(no + 1);
//           }}
//         >
//           Increment
//         </button>
//         <button
//           className="decrement"
//           onClick={() => {
//             return no > 0 ? setNo(no - 1) : 0;
//           }}
//         >
//           Decrement
//         </button>
//       </div> */}
//       <p>{no}</p>
//       <button onClick={plus}>+</button>
//       <button onClick={minus}>-</button>
//     </>
//   );
// }
// export default App;

//USEEFFECT HOOKS
import React from "react";

function App() {
  const [no, setNo] = useState(10);
  const plus = () => {
    setNo(no + 1);
  };
  useEffect(() => {
    document.title = `Chats(${no})`;
  });
  return (
    <>
      <p>{no}</p>
      <button onClick={plus}>+</button>
    </>
  );
}

export default App;
