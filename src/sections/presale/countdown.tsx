import React, { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: Date; // ngày giờ đích để đếm ngược đến
};

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <p className="text-center text-red-500 font-bold">Presale Ended</p>;
  }

  return (
    <div className="flex justify-center gap-2 mt-4">
      <TimeBox value={timeLeft.days} label="D" />
      <TimeBox value={timeLeft.hours} label="H" />
      <TimeBox value={timeLeft.minutes} label="M" />
      <TimeBox value={timeLeft.seconds} label="S" />
    </div>
  );
};

export default CountdownTimer;

// Helper
function getTimeRemaining(target: Date) {
  const total = target.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-gray-100 px-3 py-1 rounded-md text-lg font-semibold text-gray-800">
    {String(value).padStart(2, "0")}
    {label}
  </div>
);
