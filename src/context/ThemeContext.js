import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [toggled, setToggled] = useState(true);
  return (
    <ThemeContext.Provider value={[toggled, setToggled]}>
      {props.children}
    </ThemeContext.Provider>
  );
}
