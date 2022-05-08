import React from 'react'
import { userInfo, UserContext } from './context/UserContext'
import './App.css'
import Layout from './core/Layout';
import Info from './component/Info';
function App () {
  return (
    <UserContext.Provider value={userInfo.user}>
      <div className='App'>
        <Layout>
          <Info />
        </Layout>
      </div>
    </UserContext.Provider>
  );
}

export default App;
