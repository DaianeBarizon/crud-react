import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersonProvider } from './hook/PersonProvider';
import Routes from './routes/index';
import Global from './global';

function App() {
  return (
    <PersonProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </PersonProvider>
  );
}

export default App;
