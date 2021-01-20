import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export default function App() {

    const divStyle2 = {
        marginTop: '40px',
        // marginBottom: '60px'
      };
  return (
    <>
    <div className='container' style={divStyle2}>
        <h1 className="header4">Who is Turja?</h1>
        <div className="grid-row">
            <img src="images/aboutFace.png" height="100"
                className="aboutFace"
                />
                <div className="rowText">
              <h2 style={{ fontSize: "20px" }}> 🎓 Currently studying Computer Science and Business Analytics at Ryerson University </h2> 
              <br></br>
              <h2 style={{ fontSize: "20px" }}>
              🏃🏽‍♂️ Passionate about learning how to innovate complex challenges 
              </h2>
              <br></br>
              <h2 style={{ fontSize: "20px" }}>
              🏔 Love travelling and stepping out of my comfort zone
              </h2>
              <br></br>
              <h2 style={{ fontSize: "20px" }}>
              🛠 Currently building 'NBA Player/Team Analyzer' using React, Javascript, HTML/CSS 
              </h2>
              </div>
              </div>
    </div>
    </>
  );
}