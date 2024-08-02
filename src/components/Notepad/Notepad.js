import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import './Notepad.scss';

function Notepad({notepadToggled, setNotepadToggled, zIndexes, setZIndexes}){

    const text =
        "Hello! 👋\nGlad to see you there\nI'm David, a FullStack Web & Blockchain developer for more than 8 years.\nIf you need some help, just open the terminal on the sidebar and type 'help'.\nHave fun!";

    function handleClick(){
        setZIndexes({
            "console": zIndexes['console'] > 0 ? zIndexes['console'] - 1 : zIndexes['console'],
            "calculator": zIndexes['calculator'] > 0 ? zIndexes['calculator'] - 1 : zIndexes['calculator'], 
            "fileExplorer": zIndexes['fileExplorer'] > 0 ? zIndexes['fileExplorer'] - 1 : zIndexes['fileExplorer'], 
            "notepad": 4
        });
    }

    function closeNotepad(){
        setNotepadToggled(false);
    }
    
    return(
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndexes['notepad']}} className={`notepad-window ${notepadToggled ? 'visible' : ''}`} onClick={handleClick}>
                <div className="status-bar">
                    <div className="logo"><img alt="notepad.png" src="/notepad.png" /></div>
                    <div className="window-name">About me</div>
                    <div className="close-btn" onClick={closeNotepad} >X</div>
                </div>
                <div className="text-editor">
                    <textarea className="editor" spellCheck="false">{text}</textarea>
                </div>
            </div>
        </Draggable>
    )
}

export default Notepad;