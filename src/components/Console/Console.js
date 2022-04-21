import './Console.css';
import Window from '../Parts/Window/Window';
import Draggable from 'react-draggable';
import { useRef } from 'react';

function Console() {
  const input = useRef(null);
  const console = useRef(null);

  function focusInput(){
    input.current.focus();
  }

  function closeConsole(){
    console.current.style.opacity = 0;
  }

  return (
    <Draggable>
      <div className="console-window" ref={console} onClick={focusInput}>
        <div className="status-bar">
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
