import React from 'react';
import './App.css';

import useBaseData from './custom-hooks/useBaseData';
import Navbar from './components/Navbar';
import { SRC_URL } from "./shared/baseUrl";

function App() {
  const [data, isLoading, errorMessage] = useBaseData();
  console.log("data in app", data);

  if (data !== null) {

    const bgImage = data["bg-image"]
    const randomBackground = bgImage[Math.floor(Math.random() * bgImage.length)];
    console.log("randomBg", randomBackground);

    return (
      <div className="App" style={{ backgroundImage: `url(${SRC_URL}${randomBackground})` }}>
        <div className="card-overlay">
          <Navbar logo={data["hdr-image"]} />
          <div>Hi there!</div>
          <div>{data["copy-text"]}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }

}

export default App;
