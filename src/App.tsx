import React from 'react';
import './App.css';

import useBaseData from './custom-hooks/useBaseData';
import Navbar from './components/Navbar';

function App() {
  const [data, isLoading, errorMessage] = useBaseData();
  console.log("data in app", data);

  return (
    <div className="App">
      <Navbar logo={data["hdr-image"]} />
      <div>Hi there!</div>
      <div>{data["copy-text"]}</div>
    </div>
  );
}

export default App;
