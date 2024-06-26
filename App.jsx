import React, { useState } from "react";
import './App.css';

   const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [letters, setLetters] = useState("");

    const handleChange = (e) =>{
      setInputValue(e.target.value)
    }

    const handleGenerate = () =>{
      const generatedletters = inputValue.split("").map((letter, index) => {

      const style = {
        fontSize: Math.floor(Math.random() * 16) + 16,
        color: getRandomColor(),
        backgroundColor: getRandomBackgroundColor(),
        transform: getRandomTransform()
      }

      return (
        <div key={index} className='letter-card' style={style}>
          {letter}
        </div>
      );
    });

    setLetters(generatedletters);
    };

    const getRandomColor = () => {
      const color = ["tomato", "darkorange", "whitesmoke", "lightblue", "darkgreen", "purple", "yellow", "pink"]

      return color[Math.floor(Math.random() * color.length)]
    };

    const getRandomBackgroundColor = () => {
      const color = ["red", "orange", "aliceblue", "blue", "green", "darkpurple", "darkyellow", "darkpink"]

      return color[Math.floor(Math.random() * color.length)]
    };

    const getRandomTransform = () => {
      const rotation = ["rotate(-5deg)", "rotate(5deg)", "rotate(-10deg)", "rotate(100deg)", "rotate(-15deg)", "rotate(15deg)"]

      return rotation[Math.floor(Math.random() * rotation.length)]
    };

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange}
        className='input' />

        <button onClick={handleGenerate} className='button'>
          Gerar Carta
        </button>

        <div className='letter-container'>{letters}</div>
      </div>
    )
   }
   export default App;