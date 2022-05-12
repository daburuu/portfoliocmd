import './Console.scss';
import Window from '../Parts/Window/Window';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';

function Console({consoleToggled, setConsoleToggled, zIndexes, setZIndexes}) {

  const input = useRef(null);
  const consoleRef = useRef(null);

  function focusInput(){
    setZIndexes({
      "console": 3,
      "calculator": zIndexes['calculator'] > 0 ? zIndexes['calculator'] - 1 : zIndexes['calculator'], 
      "notepad": zIndexes['notepad'] > 0 ? zIndexes['notepad'] - 1 : zIndexes['notepad']
    });
    input.current.focus();
  }

  function closeConsole(){
    setConsoleToggled(false);
  }

  return (
    <Draggable handle=".status-bar">
      <div style={{'zIndex': zIndexes['console']}} className={`console-window ${consoleToggled ? 'visible' : ''}`} ref={consoleRef} onClick={focusInput}>
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
