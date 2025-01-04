import React, { useState } from 'react'

const App = () => {

  let [a, setA] = useState(0)

  const INumber = () => {
    setA(a = a + 1)
  }

  const DNumber = () => {
    setA(a = a - 1)
  }


  return (
    <div>
      <h1>Count: {a}</h1>
      <div className='btn'>
        <button onClick={INumber}>Increase</button>
        <button onClick={DNumber}>Decrease</button>
      </div>
    </div>
  )
}

export default App