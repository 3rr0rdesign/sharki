import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  position: relative;
`;

const Heading = styled.h1`
  font-family: lumispeak;
  color: white;
  margin: 10px 0;
`;

const ImageContainer = styled.div`
  width: 100%; // Use full width for responsiveness
  max-width: 450px; // Set a maximum width
  height: 450px; // Fixed height for 1:1 aspect ratio
  border: 2px solid #572E2E;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  overflow: hidden;
  position: relative; // Position relative for the image inside
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the image covers the container
`;

const Button = styled.button`
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #003366;
  color: white;
`;

const totalImages = 30; // Total number of images available
const basePath = '/Lumis/Sharkis/'; // Base path for images

const ContractSection = () => {
  const [currentImage, setCurrentImage] = useState(`${basePath}1.png`);

  const handleChangeImage = () => {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Random index from 1 to totalImages
    const newImage = `${basePath}${randomIndex}.png`;

    // Check if the image exists (basic error handling)
    const img = new window.Image();
    img.src = newImage;
    img.onload = () => setCurrentImage(newImage);
    img.onerror = () => handleChangeImage(); // Try again if the image doesn't load
  };

  return (
    <Container>
      <Heading>Get yourself a sharki pfp</Heading>
      <ImageContainer>
        <Image src={currentImage} alt="Random Shark" />
      </ImageContainer>
      <Button onClick={handleChangeImage}>CHOMP!</Button>
    </Container>
  );
};

export default ContractSection;
