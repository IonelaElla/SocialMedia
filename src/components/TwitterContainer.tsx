import React from 'react';
import styled from 'styled-components';

const TwitterContainer = styled.div`
  position: relative;
  width: 1500;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

 
  }
`;

const Img = styled.img`
  position: relative;
  width: 1500px;
  height: 500px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${TwitterContainer}:hover & {
    opacity: 1;
  `;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;


const Description = styled.p`
  font-size: 18px;
  color: #555;
`;

const CallToAction = styled.button`
background-color: #3498db;
color: #fff;
padding: 10px 20px;
border: none;
cursor: pointer;
font-size: 16px;
border-radius: 5px;
`;

interface TwitterTemplateProps {
  title: string;
  description: string;
  image: string;
}

const TwitterTemplate: React.FC<TwitterTemplateProps> = ({ title, description,image }) => {
  return (
    <TwitterContainer>
        <Img src={image} alt="Twitter Image" />
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </TwitterContainer>
  );
};

export default TwitterTemplate;
