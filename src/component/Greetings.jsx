import React from 'react'

const Greetings = (porps) => {
  return (
    <div>
      <h1>hello, {porps.name}</h1>
      <p>hi, {porps.id}</p> 
    </div>
  )
}

export default Greetings
