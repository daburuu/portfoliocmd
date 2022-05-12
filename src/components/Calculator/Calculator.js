import './Calculator.scss';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';

function Calculator({calculatorToggled, setCalculatorToggled, zIndexes, setZIndexes}){
    const calculatorRef = useRef(null);

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

    return (
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndexes['calculator']}} className={`calculator-window ${calculatorToggled ? 'visible' : ''}`} ref={calculatorRef} onClick={handleClick} >
                <div className="status-bar">
                    <div className="logo"><img alt="calculator.png" src="/calculator.png" /></div>
                    <div className="window-name">Calculator</div>
                    <div className="close-btn" onClick={closeCalculator} >X</div>
                </div>
                <div className="Calculator">
                </div>
            </div>
        </Draggable>
    )
}

export default Calculator;