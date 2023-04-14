import React, { useState, useEffect } from 'react';
import './test.css';

const Countdown: React.FC = () => {
  const [countdownDate, setCountdownDate] = useState<string | null>(
    localStorage.getItem('countdownDate')
  );
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (countdownDate) {
      const intervalId = setInterval(() => {
        const difference = new Date(countdownDate).getTime() - new Date().getTime();
        if (difference <= 0) {
          clearInterval(intervalId);
          localStorage.removeItem('countdownDate');
          setTimeLeft(null);
        } else {
          setTimeLeft(difference);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [countdownDate]);

  const handleStartCountdown = () => {
    const now = new Date();
    const countdownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 28).toString();
    localStorage.setItem('countdownDate', countdownDate);
    setCountdownDate(countdownDate);
  };

  const formatTimeLeft = (time: number): { seconds: number; minutes: number; hours: number; days: number } => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return { seconds, minutes, hours, days };
  };

  return (
    <div style={{width:'100vw', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      {timeLeft ? (
        <div className='text-center'>
          <p className='CountDown'>{formatTimeLeft(timeLeft).days} : {formatTimeLeft(timeLeft).hours} : {formatTimeLeft(timeLeft).minutes} : {formatTimeLeft(timeLeft).seconds}</p>
          <p className='para' style={{fontSize:'4rem'}}>Avant que Antoine puisse boire !</p>
        </div>
      ) : (
        <button className='Btnnn' onClick={handleStartCountdown}>Start countdown</button>
      )}
    </div>
  );
};

export default Countdown;