import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import PreLoader from './Components/PreLoader';

function App() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const time= setTimeout(() => {
      setLoading(false);
    }, 3100);

    return ()=> clearTimeout(time);
  }, []);
  return (
    <div>
      {
        Loading ? (
          <PreLoader/>
        ):(
          <Home/>
        )
      }
    </div>
    // <SideBar/>
  );
}

export default App;
