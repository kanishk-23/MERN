import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  const [length, setLength] = useState(10);
  const [isnumberAllowed, setIsNumberAllowed] = useState(false);
  const [ischarAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [color, setColor] = useState("black");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isnumberAllowed) str += "1234567890";
    if (ischarAllowed) str += "~!@#$%^&*()_+=-{}[]'";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, ischarAllowed, isnumberAllowed]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, ischarAllowed, isnumberAllowed, passwordgenerator]);

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="max-w-sm mx-auto my-10 text-center bg-yellow-500 rounded-xl">
          <h1 className="text-xl font-black py-1 text-blue-500">
            Password Generator
          </h1>

          <div className="flex text-sm justify-center font-black rounded-xl shadow-md overflow-hidden mx-10">
            <input
              type="text"
              value={password}
              className="outline-none bg-white w-full text-center text-green-500"
              readOnly
              placeholder="password"
              ref={passwordRef}
            />

            <button className="bg-blue-500 w-20" onClick={copyPasswordToClip}>
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2 mx-2 my-2">
            <div className="flex item-center gap-x-2">
              <input
                type="range"
                min={0}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="">length:{length}</label>
            </div>

            <div className="flex item-center gap-x-2">
              <input
                type="checkbox"
                id="numinput"
                defaultChecked={isnumberAllowed}
                onChange={() => setIsNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numinput">Number</label>
            </div>

            <div className="flex item-center gap-x-2">
              <input
                type="checkbox"
                id="charinput"
                defaultChecked={ischarAllowed}
                onChange={() => setIsCharAllowed((prev) => !prev)}
              />
              <label htmlFor="charinput">Character</label>
            </div>
          </div>
        </div>
        <Footer setColor={setColor} />
      </div>
    </>
  );
}

export default App;
