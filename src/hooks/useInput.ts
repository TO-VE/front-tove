import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
