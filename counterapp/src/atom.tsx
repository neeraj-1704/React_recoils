// import { atom, selector } from "recoil";

import { atom, selector } from "recoil";

// export const counterState = atom({
//     key : "counterState",
//     default : 0
// })

// export const storeState = atom({
//     key : "storeState",
//     default : 0
// })


// export const increaseSelectorState = selector({
//     key : "increaseSelectorState",
//     get : ({get}) => {
//             let a = get(counterState);
//             console.log(a)
//             return (a + 1)
//     }
// })


// export const counterStateSelector = selector({
//     key : "counterStateSelector",
//     get : ({get}) => {
//         const count = get(counterState);

//         return (count + 1 );
//     }
// })

// export const decrementStateSelector1 = selector({
//     key : "decrementStateSelector1",
//     get : ({get}) => {
//         const count = get(counterState);

//         return (count);
//     }
// })

export const countState = atom({
    key: "countState",
    default: 0
})

export const StartSelector = selector({
    key : "StartSelector",
   get : ({get}) => {
        const interval = 1000;
        let clockValue = get(countState);
     return  setInterval(() => {
            clockValue + 1
        }, interval);
   }
    
})

