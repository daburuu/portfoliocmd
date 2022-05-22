import TopBar from './Bars/TopBar/TopBar';
import SideBar from './Bars/SideBar/SideBar';
import Console from './Console/Console';
import Notepad from './Notepad/Notepad';
import Calculator from './Calculator/Calculator';
import FileExplorer from './FileExplorer/FileExplorer';
import './Desktop.scss';
import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

function Desktop({ isLoading }){
    const [zIndexes, setZIndexes] = useState({
        "console": 0,
        "notepad": 0,
        "calculator": 0,
        "fileExplorer": 0
    })
    const [consoleToggled, setConsoleToggled] = useState(true);
    const [notepadToggled, setNotepadToggled] = useState(false);
    const [calculatorToggled, setCalculatorToggled] = useState(false);
    const [fileExplorerToggled, setFileExplorerToggled] = useState(false);
    const [selected, setSelected] = useState(null);

    function openNotepad(){
        setNotepadToggled(true);
        setZIndexes({...zIndexes, "notepad": 4})
    }

    function openCalculator(){
        setCalculatorToggled(true);
        setZIndexes({...zIndexes, "calculator": 4})
    }

    function openFileExplorer(){
        setFileExplorerToggled(true);
        setZIndexes({...zIndexes, "calculator": 4})
    }

    useEffect(() => {
    }, []);
    return(
        <div className={`Desktop ${isLoading ? '' : 'visible'}`}>
            <TopBar />
            <SideBar itemsToggled={{consoleToggled, notepadToggled, calculatorToggled}} setConsoleToggled={setConsoleToggled} setNotepadToggled={setNotepadToggled} setCalculatorToggled={setCalculatorToggled}/>
            <Draggable>
                <div className={`desktop-icon notepad${selected === "notepad" ? " selected" : ""}`} id="notepad" onClick={(e) => { setSelected(e.currentTarget.id); } } onDoubleClick={openNotepad}>
                    <div className="icon"><img alt="icon-desktop" src="/notepad.png" /></div>
                    <div className="icon-name">About me</div>
                </div>
            </Draggable>
            <Draggable>
                <div className={`desktop-icon calculator${selected === "calculator" ? " selected" : ""}`} id="calculator" onClick={(e) => { setSelected(e.currentTarget.id); } } onDoubleClick={openCalculator}>
                    <div className="icon"><img alt="icon-desktop" src="/calculator.png" /></div>
                    <div className="icon-name">Calculator</div>
                </div>
            </Draggable>
            <Draggable>
                <div className={`desktop-icon file-explorer${selected === "file-explorer" ? " selected" : ""}`} id="file-explorer" onClick={(e) => { setSelected(e.currentTarget.id); } } onDoubleClick={openFileExplorer}>
                    <div className="icon"><img alt="icon-desktop" src="/file-explorer.png" /></div>
                    <div className="icon-name">File explorer</div>
                </div>
            </Draggable>
            <Console consoleToggled={consoleToggled} setConsoleToggled={setConsoleToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
            <Notepad notepadToggled={notepadToggled} setNotepadToggled={setNotepadToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
            <Calculator calculatorToggled={calculatorToggled} setCalculatorToggled={setCalculatorToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
            <FileExplorer fileExplorerToggled={fileExplorerToggled} setFileExplorerToggled={setFileExplorerToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
        </div>
    );
}

export default Desktop;