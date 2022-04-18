import { useEffect } from 'react';
import './Input.css';
function Input({ setHistory, history, setPath, path }) {

  function onKeyPressed(event) {
    if(event.key === "Enter") {
      console.log(event.target.value);
      setHistory([...history, event.target.value]);
      event.target.value = "";
    }
  }

  useEffect(() => {
    setPath("~ >");
  });

  return (
    <div className="Input">
        <div className='path'>{path}</div>
        <input type="text" autoFocus onKeyDown={onKeyPressed}></input>
    </div>
  );
}

export default Input;
