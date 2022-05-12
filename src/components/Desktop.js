import TopBar from './Bars/TopBar/TopBar';
import SideBar from './Bars/SideBar/SideBar';
import Console from './Console/Console';
import Notepad from './Notepad/Notepad';
import Calculator from './Calculator/Calculator';
import './Desktop.css';
import { useState } from 'react';
import Draggable from 'react-draggable';

function Desktop({ isLoading }){
    const [zIndexes, setZIndexes] = useState({
        "console": 0,
        "notepad": 0,
        "calculator": 0,
    })
    const [consoleToggled, setConsoleToggled] = useState(true);
    const [notepadToggled, setNotepadToggled] = useState(false);
    const [calculatorToggled, setCalculatorToggled] = useState(false);

    function openNotepad(){
        setNotepadToggled(true);
        setZIndexes({...zIndexes, "notepad": 3})
    }

    function openCalculator(){
        setCalculatorToggled(true);
        setZIndexes({...zIndexes, "calculator": 3})
    }

    return(
        <div className={`Desktop ${isLoading ? '' : 'visible'}`}>
            <TopBar />
            <SideBar itemsToggled={{consoleToggled, notepadToggled, calculatorToggled}} setConsoleToggled={setConsoleToggled} setNotepadToggled={setNotepadToggled} setCalculatorToggled={setCalculatorToggled}/>
            <Draggable>
                <div className="desktop-icon notepad" onDoubleClick={openNotepad}>
                    <img src="/notepad.png" />
                    <div className="icon-name">About me</div>
                </div>
            </Draggable>
            <Draggable>
                <div className="desktop-icon calculator" onDoubleClick={openCalculator}>
                    <img src="/calculator.png" />
                    <div className="icon-name">Calculator</div>
                </div>
            </Draggable>
            <Console consoleToggled={consoleToggled} setConsoleToggled={setConsoleToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
            <Notepad notepadToggled={notepadToggled} setNotepadToggled={setNotepadToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
            <Calculator calculatorToggled={calculatorToggled} setCalculatorToggled={setCalculatorToggled} zIndexes={zIndexes} setZIndexes={setZIndexes}/>
        </div>
    );
}

export default Desktop;