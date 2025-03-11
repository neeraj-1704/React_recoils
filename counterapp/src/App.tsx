
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { counterState, counterStateSelector, decrementStateSelector1 } from './atom'

// import { useRecoilValue, useSetRecoilState } from "recoil"
// import { countState, StartSelector } from "./atom"
import { useEffect, useRef, useState } from "react";
// import { useRef } from "react"

// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { counterState, counterStateSelector, storeState } from "./atom";
// import { increaseSelectorState } from "./selector";

// function App() {

//   const [count, setCount] = useRecoilState(counterState);
//   const counter = useRecoilValue(counterStateSelector);
//   const counter1 = useRecoilValue(decrementStateSelector1)
//   const IncreaseCount = () => {
//     setCount((count) => (count + 1));
//   }

//   const DecraseCount = () => {
//     if (count === 0) {
//       window.alert("Count is zero")
//       return null
//     }
//     setCount((count) => (count - 1))
//   }

//   const getReset = () => {
//     if(count > 0){
//       setCount(0);
//     }
//     window.alert('Count is zero')
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={IncreaseCount}>Counter {count}</button>
//       <button onClick={DecraseCount}>Counter {count}</button>
//         <div>
//           <h1>Next : {counter}</h1>
//           <h1>Prv : {counter1}</h1>
//         </div>
//         <button onClick={getReset}>{count}</button>
//     </div>
//   )
// }

// export default App
// export const App = () => {

//   const [count, setCount] = useRecoilState(counterState);
//   const setValue = useSetRecoilState(storeState);

//   const counter1 = useRecoilValue(increaseSelectorState);


//   const getValue = (event: any) => {
//     event.preventDefault();
//     const value = Number(event.target.value);
//     if (!value) {
//       console.log(value)
//       setCount(value);
//     }

//   }

//   const storeValue = () => {
//     setValue((count) => count + 1);
//   }
//   return (
//     <div>
//       <input onChange={getValue} type="text" id="myNumber" name="text" />
//       <h1>{counter1}</h1>
//       <button onClick={storeValue}>Increase</button>
//     </div>
//   )
// }
// export default App

// import React from 'react';
// import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// //import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

//  const counterState = atom({
//   key: 'counterState',
//   default: 0,
// });

//  const storeState = atom({
//   key: 'storeState',
//   default: 0,
// });

//  const increaseSelectorState = selector({
//   key: 'increaseSelectorState',
//   get: ({ get }) => {
//     let a = get(storeState);
//     return a + 1;
//   },
// });

// export const App = () => {
//   const [count, setCount] = useRecoilState(counterState);
//   const setValue = useSetRecoilState(storeState);
//   const counter1 = useRecoilValue(increaseSelectorState);

//   const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const value = parseInt(event.target.value, 10);
//     if (!isNaN(value)) {
//       setCount(value);
//     }
//   };

//   const storeValue = () => {
//     setValue((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <input onChange={getValue} type="text" id="myNumber" name="text" />
//       <h1>Counter State: {count}</h1> {/* Display count */}
//       <h1>Store State + 1: {counter1}</h1>
//       <button onClick={storeValue}>Increment Store State</button> {/* Clearer button text */}
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil';


// export const counterState = atom({
//   key: 'counterState',
//   default: 0,
// });

// export const storeState = atom({
//   key: 'storeState',
//   default: 0,
// });

// export const increaseSelectorState = selector({
//   key: 'increaseSelectorState',
//   get: ({ get }) => {
//     let a = get(storeState);
//     return a + 1;
//   },
// });

// export const App = () => {
//   const [count, setCount] = useRecoilState(counterState);
//   const setValue = useSetRecoilState(storeState);
//   const counter1 = useRecoilValue(increaseSelectorState);

//   const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const value = parseInt(event.target.value, 10);
//     console.log('Parsed value:', value);
//     console.log('Is NaN:', isNaN(value));
//     if (!isNaN(value)) {
//       setCount(value);
//     }
//   };

//   const storeValue = () => {
//     console.log('Store value incremented');
//     setValue((prev) => prev + 1);
//   };

//   console.log('Count:', count);
//   console.log('Store State:', storeState);

//   return (
//     <div>
//       <input onChange={getValue} type="number" id="myNumber" name="text" />
//       <h1>Counter State: {count}</h1>
//       <h1>Store State + 1: {counter1}</h1>
//       <button onClick={storeValue}>Increment Store State</button>
//     </div>
//   );
// };

// export default App

// buidling the clock watch 

// export const countState = atom({
//     key: "countState",
//     default: 0
// })

// export const StartSelector = selector({
//     key : "StartSelector",
//    get : ({get}) => {
//         const interval = 1000;
//         let clockValue = get(countState);
//      return  setInterval(() => {
//             clockValue + 1
//         }, interval);
//    }

// }

// calender date
// function App() {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date())
//     }, 1000)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])


//   const formattingTime = time.toLocaleDateString();

//   return (
//     <div>
//       <h1>{formattingTime}</h1>
//       {/* <button onClick={startWatch}>Start</button> */}
//       {/* <button onClick={stopWatch}>Stop</button>
//       <button onClick={resetWatch}>Reset</button> */}
//     </div>
//   )
// }

// export default App




function App() {

  const [state, setState] = useState(false);
  const [value, setValue] = useState(0);
  const valueRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if(state){
      valueRef.current = setInterval(() => {
        setValue((value) => value + 1);
      }, 1000)
    }else{
      clearInterval(valueRef.current);
        valueRef.current = undefined;
    }

    return () => {
      if (valueRef.current !== undefined) {
        clearInterval(valueRef.current);
        
      }
    }
  }, [state])


  const startTime = () => {
      setState(true); 
  }

  const stopTime = () => {
    setState(false); 
  }

  const resetTime = () => {
    setState(false);
    valueRef.current = 0;
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  )
}

export default App

