import React from 'react';
import logo from './logo.svg';
import Register from './components/form/Register';
import ea from './assets/ea-logo.png';

 const App = () => {

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DYNAMIC-FORM by <img src={ea} alt="" width="50"/></h1>
      </header>
      <main className="App-main">
        <Register/>
      </main>
    </>
  );
}

export default App;
