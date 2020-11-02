import { useEffect, useRef } from 'react';

export const useTimeout = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => { // Remember the latest callback.
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => { // Set up the interval.
    const tick = () => { savedCallback.current() }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => { clearInterval(id) }
    }
  }, [delay]);
}
