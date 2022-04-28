import TopBar from './Bars/TopBar/TopBar';
import SideBar from './Bars/SideBar/SideBar';
import Console from './Console/Console';
import Notepad from './Notepad/Notepad';
import './Desktop.css';
import { useState } from 'react';
import Draggable from 'react-draggable';

function Desktop({ isLoading }){
    const [consoleToggled, setConsoleToggled] = useState(true);
    const [notepadToggled, setNotepadToggled] = useState(false);
    
    function openNotepad(){
        setNotepadToggled(true);
    }

    return(
        <div className={`Desktop ${isLoading ? '' : 'visible'}`}>
            <TopBar />
            <SideBar itemsToggled={{consoleToggled, notepadToggled}} setConsoleToggled={setConsoleToggled} setNotepadToggled={setNotepadToggled} />
            <Draggable>
                <div className="desktop-icon notepad" onDoubleClick={openNotepad}>
                    <img src="/notepad.png" />
                    <div className="icon-name">About me</div>
                </div>
            </Draggable>
            <Console consoleToggled={consoleToggled} setConsoleToggled={setConsoleToggled} />
            <Notepad notepadToggled={notepadToggled} setNotepadToggled={setNotepadToggled} />
        </div>
    );
}

export default Desktop;