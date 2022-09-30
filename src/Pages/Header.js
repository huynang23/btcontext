import React,{useContext} from 'react'
import "../App.css"
import { CtxUsername } from '../App'

const Header = () => {
    const username = useContext(CtxUsername)
  return (
    <div>
        
        {
            username.username === '' ? ( <div className='header'><span className='mindx'>MindX</span> <span className='login'>Login</span></div>) 
            : (<div className='header'><span className='mindx'>MindX</span> <span className='login'>Welcome, {username.username}</span></div>)

        }
        
    </div>
  )
}

export default Header