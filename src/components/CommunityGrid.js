import React from 'react';
import styled from 'styled-components';
import { SizedBox } from './SizedBox';
import { Row, Col } from 'react-bootstrap';
import { BrowserView, MobileView } from 'react-device-detect';

// Define styled components

const ImageBlock = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Provide some spacing */
  margin-bottom: 10px; /* Space between image blocks if needed */
  border-radius: 25px; /* If you desire rounded corners for the image block itself */
`;

// Image component adjustment
const Image = styled.img`
  width: 100%; /* Make image fill the container width */
  height: auto; /* Maintain aspect ratio */
  max-height: 100%; /* Optional: Limit image height to fit the container */
  border-radius: 25px; /* Maintain rounded corners */
  object-fit: cover; /* Cover the area of the container, might crop the image */
`;

const Heading = styled.h1`
  margin: 15px;
  font-family: lumispeak;
  color: white;
`;

const SubTitle = styled.h2`
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
// Image gallery component
const CommunityGrid = () => {
  return (
    <div style={{ textAlign: "center" }}>
    <BrowserView>
<Heading>MEMES</Heading>
<SubText>        Most frequent used memes, find more on <a href="https://t.me/+0BbAiAQ9cZxjZGIx" target="_blank" rel="noopener noreferrer">Telegram</a>
</SubText>
<SizedBox height={"70px"} />
    <Row>
        <Col>
            <Row>
                <ImageBlock >
                    <Image src="/Community/1.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock >
                    <Image src="/Community/2.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock >
                    <Image src="/Community/3.png" alt="Sharki" />
                </ImageBlock>
            </Row>
        </Col>
        <Col>
            <Row>
            <ImageBlock>
                    <Image src="/Community/4.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock>
                    <Image src="/Community/5.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock>
                    <Image src="/Community/6.png" alt="Sharki" />
                </ImageBlock>
            </Row>
        </Col>
        <Col>
            <Row>
            <ImageBlock>
                    <Image src="/Community/7.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock>
                    <Image src="/Community/8.png" alt="Sharki" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock>
                    <Image src="/Community/9.png" alt="Sharki" />
                </ImageBlock>
            </Row>
        </Col>
    </Row>
    </BrowserView>
    <MobileView>
    <Heading>A truly based community</Heading>
<SubText>Check out our community's creations!</SubText>
<SizedBox height={"70px"} />
    <Row>
        <Col>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/8.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/4.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/10.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/6.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            </Col>
        <Col>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/7.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/2.png" alt="Portrait" />
                </ImageBlock>
            </Row>

            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/3.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/9.png" alt="Portrait" />
                </ImageBlock>
            </Row>
            <Row>
            <ImageBlock href="/">
                    <Image src="/Community/5.png" alt="Portrait" />
                </ImageBlock>
            </Row>
        </Col>
    </Row>
    </MobileView>
    </div>
  );
};

export default CommunityGrid;
