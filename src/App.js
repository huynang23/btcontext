import logo from './logo.svg';
import './App.css';
import React,{createContext, useState} from 'react'
import Page from './Pages/Page'
export const CtxUsername =  createContext();

function App() {

  const [username, setUsername] = useState('');

  return (
    <div>

   <CtxUsername.Provider value={{ username:username, setUsername:setUsername }}>
                                                       
        <Page></Page>
      </CtxUsername.Provider>

    </div>
  );
}

export default App;
