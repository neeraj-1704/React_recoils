import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { fetchData, userIdState } from '../store'

function Display() {
    const data = useRecoilValue(fetchData);

    const [count , setCount] = useRecoilState(userIdState);

    // let count = 1;
    // let setCountIn = () => {
    //     count = count++;
    // }

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Next Users</button>
      <h1>List the Name</h1>
      { 'name' in data ? <h1>{data.name}</h1> : <h1>Error: {data.error}</h1> }
      { 'email' in data ? <h1>{data.email}</h1> : <h1>Error: {data.error}</h1> }
      { 'phone' in data ? <h1>{data.phone}</h1> : <h1>Error: {data.error}</h1> }
      
    </div>
  )
}

export default Display
