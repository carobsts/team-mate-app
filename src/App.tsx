import React, { FC } from 'react';
import './App.css';
import Router from './common/Routes/Router';

interface AppProps {};

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
