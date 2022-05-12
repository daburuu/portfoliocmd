import './SideBar.css';

function SideBar({ itemsToggled, setConsoleToggled, setNotepadToggled, setCalculatorToggled }){
    function toggleConsole(){
        setConsoleToggled(!itemsToggled.consoleToggled);
    }

    function toggleNotepad(){
        setNotepadToggled(!itemsToggled.notepadToggled);
    }
    
    function toggleCalculator(){
        setCalculatorToggled(!itemsToggled.calculatorToggled);
    }
    
    return (
        <div className="SideBar">
            <div className={`${ itemsToggled.consoleToggled ? 'open' : ''} console-icon`} onClick={toggleConsole}><img src="/terminal.png" /></div>
            { itemsToggled.notepadToggled && 
                <div className={`${ itemsToggled.notepadToggled ? 'open' : ''} console-icon`} onClick={toggleNotepad}><img src="/notepad.png" /></div>
            }
            { itemsToggled.calculatorToggled && 
                <div className={`${ itemsToggled.calculatorToggled ? 'open' : ''} console-icon`} onClick={toggleCalculator}><img src="/calculator.png" /></div>
            }
        </div>
    );
}

export default SideBar;