// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtill - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtill - Dark Mode";
    }
  };
  return (
    <>
      {/* <div className="container my-3"> */}
      {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analayze"
          mode={mode}
        />
        <About /> */}
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        // about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact */}
        {/* path="/" */}
        {/* element={ */}
        <TextForm
          showAlert={showAlert}
          toggleMode={toggleMode}
          heading="Enter the text to analyse: "
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* <Route exact path="/about" element={<About />} /> */}

        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}

      {/* </div> */}
    </>
  );
}

export default App;
