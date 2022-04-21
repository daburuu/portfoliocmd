import './Console.scss';
import Window from '../Parts/Window/Window';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';

function Console({consoleToggled, setConsoleToggled}) {
  const [zIndex, setZIndex] = useState(null);

  const input = useRef(null);
  const consoleRef = useRef(null);

  function focusInput(){
    setZIndex(999);
    input.current.focus();
  }

  function handleClickOutside(){
    setZIndex(2);
  }

  function closeConsole(){
    setConsoleToggled(false);
  }

  return (
    <Draggable handle=".status-bar">
      <div style={{'zIndex': zIndex}} className={`console-window ${consoleToggled ? 'visible' : ''}`} ref={consoleRef} onClick={focusInput} onBlur={handleClickOutside}>
        <div className="status-bar">
          <div className="logo"><img alt="terminal.png" src="/terminal.png" /></div>
          <div className="window-name">Terminal</div>
          <div className="close-btn" onClick={closeConsole} >X</div>
        </div>
        <div className="Console">
          <Window forwardedRef={input} />
        </div>
      </div>
    </Draggable>
  );
}

export default Console;
