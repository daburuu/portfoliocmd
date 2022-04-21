import { useEffect, useState } from 'react';
import './Window.css';
import './Input.css';
import ExplorerHelper from '../../../helpers/ExplorerHelper/ExplorerHelper';

function Window({forwardedRef}) {
    const [path, setPath] = useState("user@dlageiste BRWSRPC ~");
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

    function changeDirectory(dest){
        if(_explorerHelper.changeDirectory(path.split(" ").reverse()[0], dest)){
            setPath(`user@dlageiste BRWSRPC ${dest}`);
            return "";
        }
        return `bash: cd: ${dest}: No such file or directory`;
    }

    function onKeyPressed(event) {
        if(event.key === "Enter") {
            let userInput = event.target.value;
            let resp = "";

            if (userInput.indexOf("cd") !== -1){
                if (userInput.split(" ").length > 2) {
                    resp = `bash: cd: too many arguments`;
                } else {
                    if (userInput === "cd .."){
                      _explorerHelper.changeParentDirectory(path);
                    } else {
                        changeDirectory(userInput.split(" ").reverse()[0]);
                    }
                }
            } else if (userInput.indexOf("ls") !== -1) {
                let explorer = _explorerHelper.printDirectories("~")[path.split(" ").reverse()[0]];
                explorer && explorer.forEach(e => {
                    if(e.indexOf('..') === -1) {
                        resp += `${e}     `; 
                    }
                });
            } else if (userInput === "clear") {
                setHistory([]);
            } else if (userInput === "pwd") {
                console.log("pwd");
            } else {
                resp = `bash: ${userInput.split(" ")[0]}: command not found`;
            }

            if (userInput !== "clear") {
                manageHistory(userInput, resp);
            }
            event.target.value = "";
        }
    }

    useEffect(() => {
        var chatHistory = document.getElementById("Window");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    });

    return (
        <div className="Window" id="Window">
            {history !== [] && history.map((e, i) => {
                return(
                    <div key={i}>{e[0]}<br />$ {e[1]}<br/>{e[2]}</div>
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
