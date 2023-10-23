import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import Education from "./routes/Education";
// import Bubbles from "./component/Bubbles";
import Popup from "./component/Popup";
import Popup2 from "./component/Popup2";
import Popup3 from "./component/Popup3";
import { Route, Routes } from "react-router-dom";
import SocialIcons from "./routes/SocialIcons";

function App() {
  return ( 
    <>
      {/* <Bubbles/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/popup" element={<Popup/>}></Route>
        <Route path="/popup2" element={<Popup2/>}></Route>
        <Route path="/popup3" element={<Popup3/>}></Route>
        <Route path="/socialIcons" element={<SocialIcons/>}></Route>
      </Routes>
    </>
  );
}

export default App;