import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
function App () {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [filterResult, setFilterResult] = useState([])

  const searchPerson = (value) => {
    setFilter(value)
    if (filter !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item).join(''.toLowerCase()).includes(filter.toLowerCase())
      })
      setFilterResult(filteredData)
    } else {
      setFilterResult(data)
    }
  }


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <div className='App'>
      <input type="text" onChange={(e) => searchPerson(e.target.value)} />

      {
        filter.length > 0 ? (
          filterResult.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          ))
        ) : (
          data.map((val, i) => (
            <div key={i}>
              <p >{val.name}</p>
            </div>
          ))
        )
      }

    </div>
  );
}

export default App;
