import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <SiVite />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <FaReact className="logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
