import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
      })
    return () => {
      setData([])
    }
  }, [])

  return (
    <div className='App'>
      {data.map((val, i) => (
        <div key={i}>
          <p >{val.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
