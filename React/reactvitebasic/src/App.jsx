import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Card from "./component/card";
import { useEffect, useState } from "react";
import Themebtn from "./component/Themebtn";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <UserContextProvider>
        <div className="flex flex-col items-center h-screen">
          <Themebtn />
          <h4 className="text-3xl text-black">React Context API</h4>
          <Card />
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
