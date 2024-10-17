import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  background-color: #93ade0;
  text-align: center;
  padding: 20px;
  border-radius: 50px;
  color: #572E2E;

  @media (max-width: 768px) {
    padding: 40px 20px; 
  }
`;

const HeroText = styled.h1`
  font-size: 20em;
  position: relative;
  z-index: 0; /* Keep text above the image */
  font-family: lumispeak;
  margin-top: 8%; /* Maintain 8% top margin for desktop */
  color: white;

  @media (max-width: 768px) {
    z-index: 0; /* Keep text above the image */
    font-size: 6em; // Smaller font for mobile
    margin-top: 4%; // Maintain 4% top margin for mobile
  }
`;

const HeroImage = styled.img`
  position: absolute;
  z-index: 1; /* Keep text above the image */
  bottom: 25%; /* Adjust to control vertical spacing */
  right: -10%; /* Move the image further to the right */
  width: 40%; /* Set image width to 50% */

  @media (max-width: 768px) {
    z-index: 1; /* Keep text above the image */
    width: 30%; /* Adjust width for mobile */
    bottom: 35%;
    right: 5%; /* Center image on mobile */
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Spacing between icons */
  margin-top: -10%; /* Reduced space above the icons for closer positioning */
  position: relative; /* Ensure icons stay above hero image */
  z-index: 0; /* Ensure icons are above the hero image */
  

  @media (max-width: 768px) {
    margin-top: -5%; /* Reduced space above the icons for closer positioning */

    gap: 5px; /* Spacing between icons */

  }
`;

const Icon = styled.a`
  display: inline-block;
  width: 10vw; /* Responsive size based on viewport width */
  height: 10vw; /* Responsive size based on viewport width */
  max-width: 90px; /* Optional max size */
  max-height: 90px; /* Optional max size */
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 7vw; /* Responsive size based on viewport width */
  height: 7vw; /* Responsive size based on viewport width */
  }
`;

const Hero = () => {
  const containerRef = useRef();

  useEffect(() => {
    const adjustHeight = () => {
      const container = containerRef.current;
      if (container) {
        const textHeight = container.querySelector('h1').offsetHeight;
        const image = container.querySelector('img');
        const imageHeight = image.offsetHeight;

        const totalHeight = textHeight + imageHeight;
        container.style.height = `${totalHeight + 82}px`;
      }
    };

    const container = containerRef.current;
    const image = container.querySelector('img');

    // Attach event listener to image load
    const handleImageLoad = () => adjustHeight();
    image.addEventListener('load', handleImageLoad);

    // Call adjustHeight on window resize
    window.addEventListener('resize', adjustHeight);
    adjustHeight(); // Initial adjustment

    return () => {
      window.removeEventListener('resize', adjustHeight);
      image.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <HeroContainer ref={containerRef}>
      <HeroText>SHARKI</HeroText>
      <HeroImage src={"/Lumis/lumi-hero.png"} alt="Hero Image" />
      <IconContainer>
        <Icon href="https://x.com/sharkionsol" style={{ backgroundImage: 'url(/Community/twitter.png)' }} />
        <Icon href="https://t.me/SHARKI_CTO_PORTAL" style={{ backgroundImage: 'url(/Community/telegram.png)' }} />
        <Icon href="https://solscan.io/account/6U48jtR53ZK3E1MozLrpwJDTrtj74uuFhMGNzGY18YPu" style={{ backgroundImage: 'url(/Community/ca.png)' }} />
        <Icon href="https://www.dextools.io/app/en/solana/pair-explorer/F9XE9W1YYtd31kgKQbke6K7SKQzd9HJEFUCfqF4poSJC?t=1729169368426" style={{ backgroundImage: 'url(/Community/dex.png)' }} />
      </IconContainer>
    </HeroContainer>
  );
};

export default Hero;
