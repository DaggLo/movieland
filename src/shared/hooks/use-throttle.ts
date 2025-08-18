import { throttle } from "lodash";
import { useMemo, useEffect, useRef } from "react";

export const useThrottle = <T extends Function>(
  callback: T,
  delay: number = 500,
): ReturnType<typeof throttle> => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const throttledCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return throttle(func, delay, { leading: true, trailing: false });
  }, []);

  return throttledCallback;
};
