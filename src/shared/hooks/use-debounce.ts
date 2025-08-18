import { debounce } from "lodash";
import { useMemo, useEffect, useRef } from "react";

export const useDebounce = <T extends (...args: any) => any>(
  callback: T,
  delay: number = 500,
): ReturnType<typeof debounce> => {
  const ref = useRef<T>(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, delay);
  }, []);

  return debouncedCallback;
};
