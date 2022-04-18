import './Console.css';
import Input from '../Parts/Input/Input';
import Window from '../Parts/Window/Window';
import { useState } from 'react';
function Console() {
  const [path, setPath] = useState('~ >');
  const [history, setHistory] = useState([]);

  return (
    <div className="Console">
      <Window 
        history={history}
        path={path} />
      <Input
        setHistory={setHistory}
        history={history} 
        setPath={setPath}
        path={path} />
    </div>
  );
}

export default Console;
