import { useEffect, useState } from 'react';
import './Window.css';
import './Input.css';
import ExplorerHelper from '../../../helpers/ExplorerHelper/ExplorerHelper';

function Window({forwardedRef}) {
    const [path, setPath] = useState("~ >");
    const [history, setHistory] = useState([]);
    const _explorerHelper = new ExplorerHelper();

    function manageHistory(userInput, resp){
        let str = [];
        let test = path;
        str[0] = test;
        str[1] = userInput;
        str[2] = resp;
        setHistory([...history, str]);
    }

    function onKeyPressed(event) {
        if(event.key === "Enter") {
          let userInput = event.target.value;
          let resp = "";
          if (userInput.indexOf("cd") !== -1){
              if(userInput.split(" ").length > 2) {
                  event.target.value = "";
                }
                setPath(userInput.split(" ").reverse()[0] + " >");
            } else if (userInput.indexOf("ls") !== -1) {
                let explorer = _explorerHelper.printDirectories("~")[path.split(" ")[0]];
                if (explorer){
                    explorer.map(e => {
                        resp += `${e}     `;
                    });
                }
            } else {
                resp = `bash: ${userInput}: command not found.`;
            }
            manageHistory(userInput, resp);
          event.target.value = "";
        }
    }

    useEffect(() => {
        var chatHistory = document.getElementById("Window");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    });

    return (
        <div className="Window" id="Window">
            {history.map((e, i) => {
                return(
                    <div key={i}>{e[0]}{e[1]}<br/>{e[2]}</div>
                )
            })}
            <div className="Input">
                <div className='path'>{path}</div>
                <input ref={forwardedRef } type="text" autoFocus onKeyDown={onKeyPressed}></input>
            </div>
        </div>
    );
}

export default Window;
