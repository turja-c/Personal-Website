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
             <h7> 🎓 Currently a Computer Science and Business Analytics student at Ryerson University </h7> 
              <br></br><br></br>
              <h7>
              🏃🏽‍♂️ Passionate about learning how to innovate complex challenges 
              </h7>
              <br></br>
            <br></br>
              <h7>
              🏔 Love travelling and stepping out of my comfort zone
              </h7>
              </div>
              </div>
    </div>
    </>
  );
}