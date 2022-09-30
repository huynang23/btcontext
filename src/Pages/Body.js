import React,{ useContext } from 'react'
import "../App.css"
import { CtxUsername } from '../App'


const Body = () => {
    let newUsername
    const Username = useContext(CtxUsername)
    const changeValue = (e) => {
        newUsername =e.target.value
    }
    const saveNewUser = () => {
        Username.setUsername(newUsername)
    }
  return (
    <div>
        
        {
            Username.username === '' ? ( <div className='form-login'>
            <div className='header-form'>Đăng Nhập</div>
            <div className='body-form'>
                <input className='text-input' type='text' placeholder='Username...' onChange={changeValue}></input>
                <button className='btn-input' onClick={saveNewUser}>Đăng Nhập</button>
            </div>
        </div>):(
            <div className='form-login' style={{backgroundColor: '#1956c8'}}>
            <span className='hello'>CHÀO MỪNG !!!</span>
        </div>
        )
        }
    </div>
  )
}

export default Body