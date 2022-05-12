import './FileExplorer.scss';
import Draggable from 'react-draggable';

function FileExplorer({fileExplorerToggled, setFileExplorerToggled, zIndexes, setZIndexes}){

    function handleClick(){
        setZIndexes({
            "console": zIndexes['console'] > 0 ? zIndexes['console'] - 1 : zIndexes['console'],
            "calculator": zIndexes['calculator'] > 0 ? zIndexes['calculator'] - 1 : zIndexes['calculator'], 
            "notepad": zIndexes['notepad'] > 0 ? zIndexes['notepad'] - 1 : zIndexes['notepad'],
            "fileExplorer": 4
        });
    }

    function closeFileExplorer(){
        setFileExplorerToggled(false);
    }

    return(
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndexes['fileExplorer']}} className={`file-explorer-window ${fileExplorerToggled ? 'visible' : ''}`} onClick={handleClick}>
                <div className="status-bar">
                    <div className="logo"><img alt="file-explorer.png" src="/file-explorer.png" /></div>
                    <div className="window-name">File explorer</div>
                    <div className="close-btn" onClick={closeFileExplorer} >X</div>
                </div>
            </div>
        </Draggable>
    );
}

export default FileExplorer;