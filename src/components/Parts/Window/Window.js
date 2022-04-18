import { useEffect } from 'react';
import './Window.css';
function Window({history, path}) {

useEffect(() => {
    // console.log(props);
})

  return (
    <div className="Window">
        {history.map((e, i) => {
            return(
                <>
                    <div key={i}>{path}{e}</div>
                    <div>bash: {e}: command not found.</div>
                </>
            )
        })}
    </div>
  );
}

export default Window;
