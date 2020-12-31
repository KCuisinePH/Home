import React from 'react';
import {Button} from '../ButtonElement'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Location,
  Img
} from './InfoSectionElements'

const InfoSection = ({lightBg , id, imgStart, lightText, headline, shadow, visible,  darkText, description, buttonLabel, imgURL, alt , primary , fontBig, dark}) => {
  
  const btnClick = () => {
    window.open("https://www.facebook.com/kcuisineph/", '_blank');
  }
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText} shadow={shadow}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Location visible={visible}>*On selected Area Only</Location>
                <BtnWrap>
                  <Button to='home' primary={primary ? 1: 0} fontBig={fontBig} onClick={btnClick} dark={dark}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgURL} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
