// În fișierul src/components/InstagramTemplate.tsx

import React from 'react';
import styled from 'styled-components';

const InstagramContainer = styled.div`
  position: center;
  width: 500px;
  height: 300px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
 
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto; /* Adaugă această linie pentru a centra imaginea */
  display: block; /* Adaugă această linie pentru a evita margin-left adăugat implicit */
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${InstagramContainer}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 16px;
  margin-bottom: 8px;
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

interface InstagramTemplateProps {
  title: string;
  description: string;
  image: string;
}

const InstagramTemplate: React.FC<InstagramTemplateProps> = ({ title, description, image }) => {
  return (
    <InstagramContainer>
      <Img src={image} alt="Instagram Image" />
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </InstagramContainer>
  );
};

export default InstagramTemplate;
