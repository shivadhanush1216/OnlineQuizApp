import React, { useState, useEffect } from "react";

export default function Timer({ time, onTimeUp, questionIndex }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [questionIndex, time]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-lg font-semibold text-red-600 mb-3">
      ⏳ Time Left: {timeLeft}s
    </div>
  );
}
