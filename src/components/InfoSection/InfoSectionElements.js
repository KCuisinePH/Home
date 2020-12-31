import styled from 'styled-components';

export const InfoContainer = styled.div `
  color: #eeeeee;
  background: ${({lightBg} )=> (lightBg ? '#eeeeee' : '#222831')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;

  }
`

export const InfoWrapper = styled.div `
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div `
  display: grid;
  grid-auto-columns: minmax(auto , 1fr);
  align-items: center ;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas:  ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }

`

export const Column1 = styled.div `
  margin-bottom: 15px;
  grid-area: col1;

`

export const Column2 = styled.div `
  margin-bottom: 15px;
  grid-area: col2;
  
`

export const TextWrapper = styled.div `
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  

`

export const Heading = styled.h1 ` 
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 900;
  color: ${({lighText}) => (lighText ? '#222831' : '#eeeeee')};
  text-shadow: ${({shadow}) => (shadow ? '2px 2px #ed9121' : 'none')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`

export const Subtitle = styled.p `
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#222831' : '#eeeeee')};

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`

export const Location = styled.p `
  max-width: 440px;
  margin-bottom: 35px;
  margin-top: -35px;
  font-size: 10px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#222831' : '#eeeeee')};
  display: ${({visible}) => (visible ? 'block' : 'none')};

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`

export const BtnWrap = styled.div `
  display: flex;
  justify-content:flex-start;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`
export const ImgWrap = styled.div `
  max-width: 555px;
  height: 100%;
`
export const Img = styled.img `
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`