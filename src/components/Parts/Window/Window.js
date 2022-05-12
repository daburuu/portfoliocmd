import { useEffect, useState } from 'react';
import './Window.css';
import './Input.css';
import ExplorerHelper from '../../../helpers/ExplorerHelper/ExplorerHelper';
import EnvironmentHelper from '../../../helpers/EnvironmentHelper/EnvironmentHelper';

function Window({forwardedRef}) {
    const [path, setPath] = useState("user@dlageiste BRWSRPC ~");
    const [history, setHistory] = useState([]);
    const _explorerHelper = new ExplorerHelper();
    const _env = new EnvironmentHelper();

    function manageHistory(userInput, resp){
        let str = [];
        let savedPath = path;
        str['path'] = savedPath;
        str['userInput'] = userInput;
        str['resp'] = resp;
        setHistory([...history, str]);
    }

    function changeDirectory(dest){
        console.log(dest);
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
                    if (userInput === "cd ..") { // @TODO: IF DIRECTORY DO NOT EXIST
                        setPath(`user@dlageiste BRWSRPC ${_explorerHelper.changeParentDirectory()}`);
                    } else {
                        changeDirectory(userInput.split(" ").reverse()[0]);
                    }
                }
            } else if (userInput.indexOf("ls") !== -1) {
                console.log(_env.getPWD());
                let explorer = _explorerHelper.printDirectories(_env.getPWD().split("/"));
                if (explorer) {
                    for(const e in explorer) {
                        resp += `${e}     `; 
                    }
                }
            } else if (userInput === "clear") {
                setHistory([]);
            } else if (userInput === "pwd") {
                resp = _env.getPWD();
            } else if (userInput === "env") {
                let env = _env.getEnv();
                resp = [];
                Object.entries(env).forEach((e) => {
                    resp.push(`${e[0]}=${e[1]}`);
                });
            } else if (userInput === "help") { 
                resp = ["available commands", "env | cd | ls | pwd | clear | help "];
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
                if (Array.isArray(e['resp'])){
                    return(
                        <div key={i}>{e['path']}<br />$ {e['userInput']}<br/>
                        {e['resp'].map((line, i) => {
                            return (
                            <div key={`line${i}`}>{line}</div>
                            )
                        })}
                        </div>
                    ) 
                } else {
                    return(
                        <div key={i}><span className="path">{e['path']}</span>$ {e['userInput']}<br/>{e['resp']}</div>
                    )
                }
            })}
            <div className="Input">
                <div className='path'>{path}</div>
                <input ref={forwardedRef } type="text" autoFocus onKeyDown={onKeyPressed}></input>
            </div>
        </div>
    );
}

export default Window;
