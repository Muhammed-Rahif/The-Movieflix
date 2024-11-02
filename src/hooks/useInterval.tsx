import { useEffect, useRef } from "react";

export interface IntervalCallback {
  (): void;
}

export function useInterval(
  callback: IntervalCallback,
  delay: number | null,
): void {
  const savedCallback = useRef<IntervalCallback | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
