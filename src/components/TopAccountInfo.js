import React, { useState } from 'react'
import DefaultLogoImg from '../assets/account-logo.png'
import '../styles/top-account-info.css'

function TopAccountInfo() {
  const [usernameState, setUsernameState] = useState("");
  const [userIsAuthorizedState, setUserIsAuthorizedState] = useState(false);
  return (
        <div className='main-user-info-container'>
          <div className='user-info-text-container'>
            <div className='username-text'>{userIsAuthorizedState ? usernameState : 'Вы еще не вошли в аккаунт'}</div>
            <a className='login-to-text' href='#'>{userIsAuthorizedState ? 'Выйти из аккаунта' : 'Войти в аккаунт'}</a>
          </div>
          <img className="logo-icon" src={DefaultLogoImg} alt="user"/>
        </div>
  )
}

export default TopAccountInfo;