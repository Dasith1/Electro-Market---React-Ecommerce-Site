import React, { useEffect, useState } from "react";

function Clock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const destination = new Date('Jun 10, 2024').getTime();
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-5">
      <div className="clock__data d-flex align-items-center gap-5">
        <div>
          <h1 className="text-white fs-2">{days}</h1>
          <h4 className="text-white fs-5">Days</h4>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__wrapper d-flex align-items-center gap-5">
        <div className="clock__data d-flex align-items-center gap-5">
          <div>
            <h1 className="text-white fs-2">{hours}</h1>
            <h4 className="text-white fs-5">Hours</h4>
          </div>
          <span className="text-white fs-1">:</span>
        </div>
      </div>
      <div className="clock__wrapper d-flex align-items-center gap-5">
        <div className="clock__data d-flex align-items-center gap-5">
          <div>
            <h1 className="text-white fs-2">{minutes}</h1>
            <h4 className="text-white fs-5">Minutes</h4>
          </div>
          <span className="text-white fs-1">:</span>
        </div>
      </div>
      <div className="clock__wrapper d-flex align-items-center gap-5">
        <div className="clock__data d-flex align-items-center gap-5">
          <div>
            <h1 className="text-white fs-2">{seconds}</h1>
            <h4 className="text-white fs-5">Seconds</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
