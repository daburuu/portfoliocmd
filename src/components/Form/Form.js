import './Form.scss';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';


function Form({formToggled, setFormToggled}){
    const [zIndex, setZIndex] = useState(null);
    const formRef = useRef(null);

    return (
        <Draggable handle=".status-bar">
            <div style={{'zIndex': zIndex}} className={`form-window ${formToggled ? 'visible' : ''}`} ref={formRef}>
                <h1>Form</h1>
            </div>
        </Draggable>
    );
}

export default Form;