import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import './Notepad.scss';

function Notepad({notepadToggled, setNotepadToggled}){
    const [zIndex, setZIndex] = useState(null);

    const text =
        "Hello! 👋\n Glad to see you there\n I'm David, a FullStack Web & Blockchain developer for more than 5 years. If you need some help, just open the terminal on the sidebar and type 'help'.\n' Have fun!";

    useEffect(() => {
        console.log(notepadToggled);
    });

    function handleClick(){
        setZIndex(999);
    }

    function handleClickOutside(){
        setZIndex(1);
    }

    function closeNotepad(){
        setNotepadToggled(false);
    }
    
    return(
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndex}} className={`notepad-window ${notepadToggled ? 'visible' : ''}`} onClick={handleClick} onBlur={handleClickOutside}>
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