import React from 'react';
import '../style/timer.css';

// import Attribution from './components/Attribution';
// import CountDownTimer from './components/CountDownTimer';
import CountDownTimer from './CountDownTimer';
import IcoBar from './IcoBar';

const IcoTimer =() =>{
    return (
        <div className="app-container text-white"style={{ backgroundColor: "#080B2A"}} >
      <div className="container">
        <main>
          <h2 style={{marginTop:'-3rem'}}>Token Sale Will End In</h2>
          <CountDownTimer />
          <IcoBar />
        </main>
      </div>
    </div>
    );
}

export default IcoTimer;