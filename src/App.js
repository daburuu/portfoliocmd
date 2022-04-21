import { useEffect, useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  })
  
  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      <Desktop isLoading={isLoading} />
    </div>
  );
}

export default App;
