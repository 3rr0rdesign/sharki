import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between; // Aligns children to each end
  padding: 50px; // Adjust padding as needed
  color: #572E2E
  font-size: 3em; // Adjust font size as needed
`;

const LeftText = styled.div`
  text-align: left;
`;

const RightText = styled.div`
  text-align: right;
`;


const Footer = () => {
    return (
      <FooterContainer>
        <LeftText>© {new Date().getFullYear()} SHARKI 2024</LeftText>
        <RightText>All rights reserved</RightText>
      </FooterContainer>
    );
  };
  
  export default Footer;