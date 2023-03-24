import { FC } from 'react';
import './App.css';
import Layout from './common/layout/Layout';
import Router from './common/routes/Router';

interface AppProps {};

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <Layout>
        <Router/>
      </Layout>
    </div>
  );
}

export default App;
