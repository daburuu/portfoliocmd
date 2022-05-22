import './Calculator.scss';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';

function Calculator({calculatorToggled, setCalculatorToggled, zIndexes, setZIndexes}){
    const calculatorRef = useRef(null);
    const [lastResult, setLastResult] = useState(null);
    const [leftOperator, setLeftOperator] = useState(null);
    const [rightOperator, setRightOperator] = useState(null);
    const [result, setResult] = useState(null);

    function handleClick(){
        setZIndexes({
            "console": zIndexes['console'] > 0 ? zIndexes['console'] - 1 : zIndexes['console'],
            "fileExplorer": zIndexes['fileExplorer'] > 0 ? zIndexes['fileExplorer'] - 1 : zIndexes['fileExplorer'], 
            "calculator": 4, 
            "notepad": zIndexes['notepad'] > 0 ? zIndexes['notepad'] - 1 : zIndexes['notepad']
        });
    }

    function closeCalculator(){
        setCalculatorToggled(false);
    }

    function getResult(){
        if(!rightOperator || (!leftOperator && "test" == 1)) {
            return;
        }
        window.eval();
    }


    return (
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndexes['calculator']}} className={`calculator-window ${calculatorToggled ? 'visible' : ''}`} ref={calculatorRef} onClick={handleClick} >
                <div className="status-bar">
                    <div className="logo"><img alt="calculator.png" src="/calculator.png" /></div>
                    <div className="window-name">Calculator</div>
                    <div className="close-btn" onClick={closeCalculator} >X</div>
                </div>
                <div className="Calculator">
                    <div className="result">{result}</div>
                    <div className="keypad">
                        <table>
                            <tr>
                                <td className="">/</td>
                                <td className="">*</td>
                                <td className="">+</td>
                                <td className="">-</td>
                            </tr>
                            <tr>
                                <td id="9">9</td>
                                <td id="8">8</td>
                                <td id="7">7</td>
                                <td onClick={getResult}>=</td>
                            </tr>
                            <tr>
                                <td id="6">6</td>
                                <td id="5">5</td>
                                <td id="4">4</td>
                                <td id="CE">CE</td>
                            </tr>
                            <tr>
                                <td id="3">3</td>
                                <td id="2">2</td>
                                <td id="1">1</td>
                                <td id="C">C</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default Calculator;