import React, { useState } from 'react'
import {ReactComponent as DefaulLogoImg} from '../assets/default-account-logo.svg'
import '../styles/top-account-info.css'

function TopAccountInfo() {
  const [usernameState, setUsernameState] = useState("");
  const [userIsAuthorizedState, setUserIsAuthorizedState] = useState(false);
  return (
    <div>
        <div className='main-user-info-container'>
          <div className='user-info-text-container'>
            <div className='username-text'>{userIsAuthorizedState ? usernameState : 'Вы еще не вошли в аккаунт'}</div>
            <a className='login-to-text' href='#'>{userIsAuthorizedState ? 'Выйти из аккаунта' : 'Войти в аккаунт'}</a>
          </div>
          <DefaulLogoImg></DefaulLogoImg>          
        </div>
    </div>
  )
}

export default TopAccountInfo;