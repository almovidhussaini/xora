import React from 'react';
import '../style/timer.css';
import Countdown from "react-countdown";

// import Attribution from './components/Attribution';
// import CountDownTimer from './components/CountDownTimer';
import CountDownTimer from './CountDownTimer';
import IcoBar from './IcoBar';

const IcoTimer =() =>{

  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return (
  //       <>
  //         <div className="time-count day">
  //           <span>{"00"}</span>Days
  //         </div>
  //         <div className="time-count hour">
  //           <span>{"00"}</span>hour
  //         </div>
  //         <div className="time-count min">
  //           <span>{"00"}</span>minute
  //         </div>
  //         <div className="time-count sec">
  //           <span>{"00"}</span>second
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <div className="time-count day">
  //           <span>{days < 10 ? "0" + days : days}</span>Days
  //         </div>
  //         <div className="time-count hour">
  //           <span>{hours < 10 ? "0" + hours : hours}</span>hour
  //         </div>
  //         <div className="time-count min">
  //           <span>{minutes < 10 ? "0" + minutes : minutes}</span>minute
  //         </div>
  //         <div className="time-count sec">
  //           <span>{seconds < 10 ? "0" + seconds : seconds}</span>second
  //         </div>
  //       </>
  //     );
  //   }
  // };
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="countdown-container">
          <div className="time-count" style={{ borderColor: "#00C8FF" }}>
            <span>{"00"}</span>
            <p>Days</p>
          </div>
          <div className="time-count" style={{ borderColor: "#FFA500" }}>
            <span>{"00"}</span>
            <p>Hour</p>
          </div>
          <div className="time-count" style={{ borderColor: "#FF4081" }}>
            <span>{"00"}</span>
            <p>Minute</p>
          </div>
          <div className="time-count" style={{ borderColor: "#00C853" }}>
            <span>{"00"}</span>
            <p>Second</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="countdown-container">
          <div className="time-count" style={{ borderColor: "#00C8FF" }}>
            <span>{days < 10 ? "0" + days : days}</span>
            <p>Days</p>
          </div>
          <div className="time-count" style={{ borderColor: "#FFA500" }}>
            <span>{hours < 10 ? "0" + hours : hours}</span>
            <p>Hour</p>
          </div>
          <div className="time-count" style={{ borderColor: "#FF4081" }}>
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>
            <p>Minute</p>
          </div>
          <div className="time-count" style={{ borderColor: "#00C853" }}>
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>
            <p>Second</p>
          </div>
        </div>
      );
    }
  };
  

    return (
        <div className="app-container text-white"style={{ backgroundColor: "#080B2A"}} >
      <div className="container">
        <main>
          <h2 style={{marginTop:'-3rem'}}>Token Sale Will End In</h2>
          {/* <CountDownTimer /> */}
          <Countdown
                       date={Date.now() +  20 * 24 * 60 * 60 * 1000 }
                      //  date={stagestart + stageDays * 24 * 60 * 60 * 1000}
                       renderer={renderer}
                     />
          <IcoBar />
        </main>
      </div>
    </div>
    );
}

export default IcoTimer;