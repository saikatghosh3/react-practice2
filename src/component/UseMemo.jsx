import React from 'react'
import { useState, useMemo } from 'react'
const UseMemo = () => {
const [count, setCount] = useState(0);
const [other, setOther] = useState(0);

 const expensiveResult = useMemo(()=>{
    
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 50000; i++) {
      total += i;
    }
    return total + count;
  }, [count]); 




  return (
    <div>
      <p>Expensive result : {expensiveResult}</p>
      <button onClick={()=> setCount(count + 1)}> Increase Count</button>
      <br />
      <button onClick={()=> setOther(other + 1)}> Increase  Other</button>
    </div>
  )
}

export default UseMemo
