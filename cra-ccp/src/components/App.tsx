import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { AgentConsole } from './AgentConsole';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <section>
            <AgentConsole ></AgentConsole>
          </section>
        </header>
      </div>
    </React.StrictMode >
  );
};

export default App;
