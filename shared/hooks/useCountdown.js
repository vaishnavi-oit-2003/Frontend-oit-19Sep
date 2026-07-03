import { useState, useEffect, useRef, useCallback } from "react";

function useCountdown(initialSeconds) {
  const [time, setTime] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [isRunning, clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setTime(initialSeconds);
    setIsRunning(true);
  }, [initialSeconds, clearTimer]);

  const isExpired = time === 0;

  return { time, isExpired, reset };
}

export default useCountdown;
