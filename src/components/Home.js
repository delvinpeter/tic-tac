import React from 'react'
import "./main.css";
import { Router, useNavigate } from 'react-router-dom';
import Login from './Login';

function Home() {
  const history =useNavigate();

  
  
  
  return (
    <div className='banner'>
        <div className='banner-head'>
            <h2>WELCOME TO <br/> TIC-TAC-TOE GAME</h2>
            <p>Let's explore the gaming universe</p>
            
          
          <button onClick={()=> history('/login')}>Play Now</button>
        
        
        </div>
    </div>
  )
}

export default Home