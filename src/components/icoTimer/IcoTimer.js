import React from 'react';
import '../style/timer.css';
import Countdown from "react-countdown";
import Star from '../../assets/icons/Star.png'
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
          <div className="time-count timer" >
            <span>{"00"}</span>
            <p>Days</p>
          </div>
          <div className="time-count timer">
            <span>{"00"}</span>
            <p>Hours</p>
          </div>
          <div className="time-count timer">
            <span>{"00"}</span>
            <p>Minutes</p>
          </div>
          <div className="time-count timer">
            <span>{"00"}</span>
            <p>Seconds</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="countdown-container">
          <div className="time-count timer" >
            <span>{days < 10 ? "0" + days : days}</span>
            <p>Days</p>
          </div>
          <div className="time-count timer" >
            <span>{hours < 10 ? "0" + hours : hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-count timer" >
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-count timer">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
  };
  

    return (
        <div className="app-container text-white position-relative"style={{ backgroundColor: "#080B2A"}} >
          <div className="position-absolute" style={{top:'80%', left:'10%'}}>
        <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'10%', left:'90%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'60%', left:'90%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute">
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'70%', left:'50%'}}>
      <img src={Star}/>
      </div>
      <div className="position-absolute" style={{top:'10%', left:'35%'}}>
      <img src={Star}/>
      </div>
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