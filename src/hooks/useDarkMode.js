import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key, initialState) {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialState);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
