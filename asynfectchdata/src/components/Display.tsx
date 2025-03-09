import React, { useRef, useState } from 'react'
import { selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { fetchData, userID, userIdState } from '../store'
import axios from 'axios';

// function Display() {
//     const data = useRecoilValue(fetchData);

//     const [count , setCount] = useRecoilState(userIdState);

//   return (
//     <div>
//         <button onClick={() => setCount(count + 1)}>Next Users</button>
//       <h1>List the Name</h1>
//       { 'name' in data ? <h1>{data.name}</h1> : <h1>Error: {data.error}</h1> }
//       { 'email' in data ? <h1>{data.email}</h1> : <h1>Error: {data.error}</h1> }
//       { 'phone' in data ? <h1>{data.phone}</h1> : <h1>Error: {data.error}</h1> }

//     </div>
//   )
// }


// function Display() {
//   const [count, setCount] = useRecoilState(userID);
//   const data = useRecoilValue(fetchUserDetails);
//   const countRef = useRef(count); // Initialize with current count

//   const handleNextUser = () => {
//     countRef.current += 1;
//     setCount(countRef.current);
//   };

//   return (
//     <>
//       <h1 onClick={handleNextUser}>These are the Backend Data fetch by Async</h1>
//       <button onClick={handleNextUser}>Next Details</button>
//       {'error' in data ? (
//         <p>Error: {data.error}</p>
//       ) : data.name ? (
//         <>
//           <p>
//             <strong>{data.name}</strong>
//           </p>
//           <p>
//             <strong>{data.email}</strong>
//           </p>
//           <p>
//             <strong>{data.phone}</strong>
//           </p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// function Display() {
//   const setCount = useSetRecoilState(userID);
//   const userLoadable = useRecoilValueLoadable(fetchUserDetails); // Loadable state
//   const [count, setLocalCount] = useState(1);

//   const increaseCount = () => {
//     if (count < 10) {
//       setLocalCount(count + 1);
//       setCount(count + 1); // Update Recoil state
//     }
//   };

//   return (
//     <>
//       <h1>These are the Backend Data fetched by Async</h1>
//       <button onClick={increaseCount}>Next Details</button>

//       {userLoadable.state === "loading" && <p>Loading...</p>}
//       {userLoadable.state === "hasValue" && (
//         <>
//           <p><strong>{userLoadable.contents.name}</strong></p>
//           <p><strong>{userLoadable.contents.email}</strong></p>
//           <p><strong>{userLoadable.contents.phone}</strong></p>
//         </>
//       )}
//       {userLoadable.state === "hasError" && (
//         <p style={{ color: "red" }}>Error: {userLoadable.contents.error}</p>
//       )}
//     </>
//   );
// }
// Create a selectorFamily for fetching user details based on userID
const fetchUserDetails = selectorFamily({
  key: 'fetchUserDetailsFamily',
  get: (userId) => async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${String(userId)}`
      );
      return response.data;
    } catch (error: any) {
      return { error: error.message };
    }
  },
});

function Display() {
  const [count, setCount] = useRecoilState(userID);
  const userLoadable = useRecoilValueLoadable(fetchUserDetails(count)); // Use Recoil selector directly
  const [localCount, setLocalCount] = useState(1);

  const increaseCount = () => {
    if (localCount < 10) {
      setLocalCount(localCount + 1);
      setCount(localCount + 1); // Update Recoil state
    }
  };

  return (
    <>
      <h1>These are the Backend Data fetched by Async</h1>
      <button onClick={increaseCount}>Next Details</button>

      {userLoadable.state === 'loading' && <p>Loading...</p>}
      {userLoadable.state === 'hasValue' && (
        <>
          <p>
            <strong>{userLoadable.contents.name}</strong>
          </p>
          <p>
            <strong>{userLoadable.contents.email}</strong>
          </p>
          <p>
            <strong>{userLoadable.contents.phone}</strong>
          </p>
        </>
      )}
      {userLoadable.state === 'hasError' && (
        <p style={{ color: 'red' }}>Error: {userLoadable.contents.error}</p>
      )}
    </>
  );
}

export default Display;
