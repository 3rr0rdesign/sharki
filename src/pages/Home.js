import React from "react";
import LumiNavbar from "../components/Navbar";
import LumiGrid from "../components/LumiGrid";
import { SizedBox } from "../components/SizedBox";
import PsyopGrid from "../components/PsyopGrid";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import { isMobile } from "react-device-detect";
import CommunityGrid from "../components/CommunityGrid";



export default function Home() {



    return(
        <div style={{width: isMobile ? "90%" : "80%", margin: "auto"}}>
 
        <LumiNavbar />
        <div id="about">
            <SizedBox height={"100px"} />
            <Hero />
        </div>
        <SizedBox height={"0px"} />
        <div id="lumis">
        <SizedBox height={"20px"} />
            <LumiGrid />
        </div>
        <SizedBox height={"20px"} />
        <div id="psyop">
        <SizedBox height={"20px"} />
            <PsyopGrid />
        </div>
        <SizedBox height={"80px"} />
        <div id="community">
        <SizedBox height={"20px"} />
            <CommunityGrid />
        </div>
        <SizedBox height={"20px"} />
        <div id="faq">
        <SizedBox height={"20px"} />
            <FAQ/>
        </div>
        <SizedBox height={"30px"} />
        <Footer />
        </div>
    );
}
