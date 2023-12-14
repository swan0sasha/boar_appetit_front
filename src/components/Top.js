import React from 'react'
import TopAccountInfo from './TopAccountInfo'
import '../styles/top.css'

function Top() {
  return (
    <div className='top-container'>
        <a href={"/recipes/1"}>test link</a>
        <input className="input-search-recipes" type="text" placeholder="Название блюда"></input>
        <button className="suggest-button">Предложить</button>
        <TopAccountInfo></TopAccountInfo>
    </div>
  )
}

export default Top