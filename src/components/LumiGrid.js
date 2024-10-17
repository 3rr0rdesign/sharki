import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { SizedBox } from "./SizedBox";
import { MobileView, BrowserView } from "react-device-detect";

const LumiImg = styled.img`
  width: 70%; /* Set width for the image */
  border-radius: 2%;
  
`;

const Heading = styled.h1`
  margin: 5px;
  font-family: lumispeak;
  color: white;
`;

const SubText = styled.h5`
  margin-x: 5%;
  color: black; // Default text color
  a {
    color: white; // Change hyperlink color to white
    text-decoration: none; // Remove underline
    &:hover {
      text-decoration: underline; // Optional: underline on hover
    }
  }
`;

const LumiGrid = () => {
  return (
    <>
      <BrowserView>
        <div style={{ textAlign: "center" }}>
          <Heading>SHARKI LORE</Heading>
          <SubText>
          It wasn't easy but we are working for our bags.
        </SubText>
        <SubText>Read the           <a href="https://x.com/NiscipBiscip/status/1845670826588213600" target="_blank" rel="noopener noreferrer"> LORE</a>
</SubText>
          <SizedBox height={"70px"} />
          <LumiImg src={"/Lumis/lore.png"} alt="sharki" /> 
          <SizedBox height={"100px"} />
          {/* Add any additional content or rows here if necessary */}
        </div>
      </BrowserView>
      <MobileView>
        <div style={{ textAlign: "center", margin: "auto" }}>
          <Heading>SHARKI LORE</Heading>
          <SubText>
          It wasn't easy but we are working for our bags 
          <a href="https://x.com/NiscipBiscip/status/1845670826588213600" target="_blank" rel="noopener noreferrer"> LORE</a>
        </SubText>          <SizedBox height={"70px"} />
          <LumiImg src={"/Lumis/lore.png"} alt="sharki" /> 
          <SizedBox height={"100px"} />
        </div>
      </MobileView>
    </>
  );
}

export default LumiGrid;
