import React, { useState, useEffect } from 'react';
import InstagramTemplate from './components/Instagram';
import TwitterTemplate from './components/TwitterContainer';
import StoryTemplate from './components/StoryTemplate';
import { generateBanner } from './generateBanner';
import styled from 'styled-components';
import FileUploader from './FileUploader';

const maxDescriptionLength = 70;

const HeaderContainer = styled.div`
  background-image: url('images/po2.jpg');
  background-size: cover;
  background-position: center;
  padding: 40px;
  text-align: center;

  h1 {
    color: #fff;
  }

  .activeButton {
    transform: scale(1.1);
  }
`;

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  transition: transform 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;

  > div {
    margin-top: 20px;
  }
`;

const FileUploaderContainer = styled.div`
  margin-top: 20px;
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
  const [template, setTemplate] = useState<string>('instagram');
  const [generatedBanner, setGeneratedBanner] = useState<any>(null);
  const [adTitle, setAdTitle] = useState<string>('');
  const [adDescription, setAdDescription] = useState<string>('');
  const [templateKey, setTemplateKey] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);

  useEffect(() => {
    setGeneratedBanner(null);
    setIsBannerVisible(false);
  }, [template]);

  const handleTemplateChange = (newTemplate: string) => {
    setTemplate(newTemplate);
    setGeneratedBanner(null);
    setIsBannerVisible(false);
  };

  const handleAdTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdTitle(e.target.value);
  };

  const handleAdDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdDescription(e.target.value);
  };

  const handleGenerateBanner = async () => {
    try {
      const title = adTitle;
      const description = adDescription;

      if (description.length > maxDescriptionLength) {
        console.error('Descrierea este prea lungă. Te rugăm să introduci o descriere mai scurtă.');
        return;
      }

      setGeneratedBanner(null);
      const result = await generateBanner(template, title, description);
      setGeneratedBanner(result);
      setIsBannerVisible(true);
    } catch (error) {
      console.error('Error from the API:', error);
    }
  };

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const handleNewAd = () => {
    setGeneratedBanner(null);
    setAdTitle('');
    setAdDescription('');
    setSelectedImage(null);
    setTemplateKey(templateKey + 1);
    setIsBannerVisible(false);
  };

  return (
    <AppContainer>
      <HeaderContainer>
        <StyledButton
          onClick={() => handleTemplateChange('instagram')}
          className={template === 'instagram' ? 'activeButton' : ''}
        >
          Instagram Template
        </StyledButton>
        <StyledButton
          onClick={() => handleTemplateChange('twitter')}
          className={template === 'twitter' ? 'activeButton' : ''}
        >
          Twitter Template
        </StyledButton>
        <StyledButton
          onClick={() => handleTemplateChange('story')}
          className={template === 'story' ? 'activeButton' : ''}
        >
          Story Template
        </StyledButton>
      </HeaderContainer>

      <input
        type="text"
        placeholder="Enter ad title"
        value={adTitle}
        onChange={handleAdTitleChange}
      />

      <input
        type="text"
        placeholder="Enter ad description"
        value={adDescription}
        onChange={handleAdDescriptionChange}
      />

      <StyledButton onClick={handleGenerateBanner}>Generate Banner</StyledButton>

      {generatedBanner && (
        <ContentContainer>
          {template === 'instagram' && (
            <InstagramTemplate
              key={templateKey}
              title="Instagram "
              description={generatedBanner?.data[0].revised_prompt}
              image={generatedBanner?.data[0].url}
            />
          )}
          {template === 'twitter' && (
            <TwitterTemplate
              key={templateKey}
              title="Twitter "
              description={generatedBanner?.data[0].revised_prompt}
              image={generatedBanner?.data[0].url}
            />
          )}
          {template === 'story' && (
            <StoryTemplate
              key={templateKey}
              title="Story "
              description={generatedBanner?.data[0].revised_prompt}
              image={generatedBanner?.data[0].url}
            />
          )}

          <FileUploaderContainer>
            <FileUploader onFileUpload={handleImageUpload} />
          </FileUploaderContainer>

          <StyledButton onClick={handleNewAd}>New Ad</StyledButton>
        </ContentContainer>
      )}
    </AppContainer>
  );
};

export default App;
