import './SideBar.css';

function SideBar({ itemsToggled, setConsoleToggled, setNotepadToggled }){
    function toggleConsole(){
        setConsoleToggled(!itemsToggled.consoleToggled);
    }

    function toggleNotepad(){
        setNotepadToggled(!itemsToggled.notepadToggled);
    }
    
    return (
        <div className="SideBar">
            <div className={`${ itemsToggled.consoleToggled ? 'open' : ''} console-icon`} onClick={toggleConsole}><img src="/terminal.png" /></div>
            { itemsToggled.notepadToggled && 
                <div className={`${ itemsToggled.notepadToggled ? 'open' : ''} console-icon`} onClick={toggleNotepad}><img src="/notepad.png" /></div>
            }
        </div>
    );
}

export default SideBar;