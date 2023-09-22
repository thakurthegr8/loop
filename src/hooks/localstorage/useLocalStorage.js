import { useEffect, useState } from "react";

const useLocalStorage = (props) => {
  const [value, setValue] = useState(props.fallback);
  useEffect(() => {
    if (props?.override) {
      localStorage.setItem(props.key, value);
    } else {
      const localStorageItem = localStorage.getItem(props.key);
      if (localStorageItem) {
        setValue(localStorageItem);
      } else {
        localStorage.setItem(props.key, props.fallback);
      }
    }
  }, []);
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  return { value, setItem };
};

export default useLocalStorage;

useLocalStorage.defaultProps = {
  fallback: "storage default value",
};
