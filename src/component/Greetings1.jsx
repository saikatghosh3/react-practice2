import React, { useState } from 'react'

const Greetings1 = () => {
    const [ count, setCount] = useState(0);
  return (
    <div>
      
      <h1>i have clicked: {count} times</h1>
      <button onClick={()=> setCount(count +1)}>Click me!</button>
      <button onClick={()=> setCount(count -1)}>Click me!</button>
    </div>
  )
}

export default Greetings1
