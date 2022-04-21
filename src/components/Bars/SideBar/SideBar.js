import './SideBar.css';

function SideBar({ itemsToggled, setConsoleToggled }){
    function toggleConsole(){
        setConsoleToggled(!itemsToggled.consoleToggled);
    }
    
    return (
        <div className="SideBar">
            <div className={`${ itemsToggled.consoleToggled ? 'open' : ''} console-icon`} onClick={toggleConsole}><img src="/terminal.png" /></div>
        </div>
    );
}

export default SideBar;