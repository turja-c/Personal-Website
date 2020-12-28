import React, {useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import { FaBorderNone } from "react-icons/fa";
export default function App() {
    const mediaMatch = window.matchMedia('(max-width: 400px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });

    // const divStyle3 = {
    //   marginTop: '-25rem',
    //   marginBottom: '-26rem',
    //   backgroundImage: `url(./images/line2.png)`,
    //   padding: '35rem'
    // };
    const styles = {
      container: isRowBased => ({
        display: 'flex',
        flexDirection: isRowBased ? 'row' : 'column',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '-25rem',
        marginBottom: '-26rem',
        backgroundImage: `url(./images/line2.png)`,
        padding: '35rem',
        cursor: 'default',
        overflow: 'hidden',
        height: '100px',
        
      })
    };
    return (
    <>
      <div className="fitted">
        <Jumbotron fluid style={styles.container(matches)} >
        {/* <img src="images/line.png" className="" /> */}
        </Jumbotron>
        </div>
    </>
  );
}
