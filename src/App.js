import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
      e.preventDefault();
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  // if (!supportsPWA) {
  //   return <div>App installed
  //     <div>pwa supprot: {supportsPWA ? 'yes' : 'no'}</div>
  //   </div>;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p id="demo">test after adding button script to script</p>
        <div>pwa supprot: {supportsPWA ? 'yes' : 'no'}</div>
        {supportsPWA &&
          <button
            className="link-button"
            id="setup_button"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}
          >
            Install component
          </button>
        }
      </header>
    </div>
  );
}

export default App;
