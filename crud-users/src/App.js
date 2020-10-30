import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersonProvider } from './hook/PersonProvider';
import { AuthProvider } from './hook/AuthContext';
import Routes from './routes/index';
import Global from './global';

function App() {
  return (
    <AuthProvider>
      <PersonProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Global />
      </PersonProvider>
    </AuthProvider>
  );
}

export default App;
