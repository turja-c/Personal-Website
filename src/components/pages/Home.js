import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeMiddle from "../HomeMiddle";
import HomeCards from "../HomeCards";
import HomeMidDivider from "../HomeMidDivider";
import HomeExperience from "../HomeExperience";
function Home() {
    return (
        <>
            <Navbar />
            <HomeMiddle />
            <HomeCards />
            <HomeMidDivider />
            <HomeExperience />
            <Footer />
        </>
    )
}

export default Home;