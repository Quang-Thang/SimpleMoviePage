import { useEffect, useState } from "react";

export default function useDebounce(initilizeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initilizeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initilizeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initilizeValue]);
  return debounceValue;
}
