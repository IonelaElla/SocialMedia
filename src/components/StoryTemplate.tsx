
import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
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

  ${StoryContainer}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
`;

const Description = styled.p`
  font-size: 22px;
  color: #555;
  text-align: left;
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

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

interface StoryTemplateProps {
  title: string;
  description: string;
  image: string;
}

const StoryTemplate: React.FC<StoryTemplateProps> = ({ title, description, image }) => {
  return (
    <StoryContainer>
      <Img src={image} alt="Story Image" />
      <ContentContainer>
        <Title>{title}</Title>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      </ContentContainer>
    </StoryContainer>
  );
};

export default StoryTemplate;
