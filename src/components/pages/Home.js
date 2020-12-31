import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeMiddle from "../HomeMiddle";
import HomeCards from "../HomeCards";
import HomeMidDivider from "../HomeMidDivider";
import HomeSecondMidDivider from "../HomeSecondMidDivider";
import HomeExperience from "../HomeExperience";
import HomeContact from "../HomeContact";

function Home() {
    return (
        <>
            <Navbar />
            <HomeMiddle />
            <HomeCards />
            <HomeMidDivider />
            <HomeExperience />
            <HomeSecondMidDivider />
            <HomeContact />
            <Footer />
        </>
    )
}

export default Home;