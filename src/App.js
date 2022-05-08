import React, { useState } from 'react'
import './App.css'
function App () {
  const [count, setCount] = useState(0)

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1)
  }

  const decrement = (e) => {
    e.preventDefault()
    setCount(count - 1)
  }

  return (
    <div className='App'>
      <button onClick={decrement}>Decrement</button>
      {count}
      <button onClick={increment}>Increment</button>

    </div>
  );
}

export default App;
