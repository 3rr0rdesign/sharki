import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const Heading = styled.h1
`
margin: 30px;
font-family: lumispeak;
color: white;
`;

const Question = styled.div`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  color: black;
  font-size: 1.7em;
  font-weight: bold;
  text-align: left;
  font-family: lumispeak;
`;

const Answer = styled.div`
  padding: 10px;
  display: none;
  text-align: left;
  font-size: 1.4em;
  &.open {
    display: block;
  }
`;

const SubTitle = styled.h4
`
padding-bottom: 30px;
color: black;
`;

const faqs = [
  {
    question: 'SHARKI',
    answer: 'YES, it is a SHARK'
  },
  {
    question: 'DISCLAIMER',
    answer: '$SHARKI is a meme coin with no intrinsic value or expectation of financial return. $SHARKI is completely useless and for entertainment purposes only. When you purchase $SHARKI, you are agreeing that you have seen this disclaimer.'
  },
  
  {
    question: 'GOAL',
    answer: 'HIGHER'
  },
  {
    question: 'NARRATIVE',
    answer: 'ITS A SHARK'
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <FAQContainer>
    <Heading>FUQ</Heading>
    <SubTitle>You have question, I may have the answers.</SubTitle>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {faq.question}
          </Question>
          <Answer className={openFAQ === index ? 'open' : ''}>
            {faq.answer}
          </Answer>
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
