import { useEffect, useState } from 'react';
import './TopBar.scss';

function TopBar(){
    const [time, setTime] = useState({
        hour: "00",
        minute: "00"
    });

    useEffect(() => {
        // const date = new Date();
        // setTime({
        //     hour: date.getHours().pad(2),
        //     minute: date.getMinutes().pad(2) 
        // });
        setInterval(() => {
            const date = new Date();
            setTime({
                hour: date.getHours().toString().padStart(2, '0'),
                minute: date.getMinutes().toString().padStart(2, '0') 
            }); 
        }, 1000);
    });

    return(
        <div className="TopBar">
            <div className="logo">DavidLageiste</div>
            <div className="status-icons">
                <img src="/wifi.svg" />
                <div className="clock">{time.hour}:{time.minute}</div>
            </div>
        </div>
    );
}

export default TopBar;
