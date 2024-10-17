import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from 'styled-components';
import Sandwich from './Sandwich'; // Import the Sandwich component

const StyledNavbar = styled.nav`
  background-color: #93ade0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0; 
  left: 0%; 
  width: 100%; 
  z-index: 1000;
`;

const Logo = styled.img`
  height: 80px; /* Customize as needed */
  padding: 10px;
`;

const NavItem = styled.a`
  margin: 0 25px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

const DashboardButton = styled.button`
  background-color: white; /* Customize as needed */
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-family: lumispeak;
  margin: 0 0 0 35px;
  border-radius: 50px;

  &:hover {
    background-color: grey;
  }
`;

const LumiNavbar = () => {
  const [isSandwichOpen, setIsSandwichOpen] = useState(false);

  const toggleSandwich = () => {
    setIsSandwichOpen(!isSandwichOpen);
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <StyledNavbar>
        <Logo src={"/logos/navbarlogo.png"} alt="Logo" />
        <div>
          <BrowserView>
            <NavItem href="#lumis">LORE</NavItem>
            <NavItem href="#psyop">PFP MAKER</NavItem>
            <NavItem href="#community">MEMES</NavItem>
            <NavItem href="#faq">FAQ</NavItem>
            <NavItem href="https://sharkimaker.lol/">BANNER MAKER</NavItem>
            <DashboardButton onClick={toggleSandwich}>BUY</DashboardButton> {/* Use DashboardButton for menu */}
          </BrowserView>
          <MobileView>
          <DashboardButton onClick={toggleSandwich}>BUY</DashboardButton> {/* Use DashboardButton for menu */}
          </MobileView>
        </div>
      </StyledNavbar>
      {isSandwichOpen && <Sandwich onClose={toggleSandwich} />}
    </div>
  );
};

export default LumiNavbar;
