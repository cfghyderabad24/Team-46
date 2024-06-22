import React from 'react';
import Header from './Component/Header';
import Mbody from './Component/Mbody';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Mbody />
      </BrowserRouter>
    </div>
  );
}

export default App;
