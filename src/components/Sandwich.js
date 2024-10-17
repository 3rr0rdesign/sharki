// Sandwich.js
import React from 'react';
import styled from 'styled-components';

const SandwichOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SandwichContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  color:  #001f33;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  background: #93ADE0;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  
`;

const MenuButton = styled.a`
  display: block;
  margin: 10px 0;
  padding: 10px;
  background: #93ade0;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: #001f33;
  }
`;
const ChompHeading = styled.h2`
  color: #001f33; /* Change this to your desired shade of blue */
`;

const Sandwich = ({ onClose }) => (
  <SandwichOverlay>
    <SandwichContainer>
    <ChompHeading>CHOMP!</ChompHeading>
      <MenuButton href="https://jup.ag/swap/SHARKI-SOL">Jupiter</MenuButton>
      <MenuButton href="https://www.geckoterminal.com/solana/pools/F9XE9W1YYtd31kgKQbke6K7SKQzd9HJEFUCfqF4poSJC">Raydium</MenuButton>
      <MenuButton href="https://coinmarketcap.com/currencies/sharki/">CMC</MenuButton>
      <MenuButton href="https://www.coingecko.com/en/coins/sharki">CoinGecko</MenuButton>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </SandwichContainer>
  </SandwichOverlay>
);

export default Sandwich;
