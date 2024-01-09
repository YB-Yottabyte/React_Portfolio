// App.js

import React from "react";
import Main from "./containers/Main";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #e0e0e0, #a0a0a0)',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <Scrollbars style={{ width: 300, height: 300 }}>
      <div style={containerStyle}>
        <Main />
      </div>
    </Scrollbars>
  );
}

export default App;
