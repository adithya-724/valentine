import Home from "./pages/Home/Home";
import VideoScreen from "./pages/VideoScreen/VideoScreen";
import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(true);
  };
  return (
    <div className="App">
      {!toggle && <Home onClick={clickHandler} />}
      {toggle && <VideoScreen />}
    </div>
  );
}

export default App;
