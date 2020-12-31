import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Heading } from '../MenuSection/MenuElement';
import '../MenuSection/styles.css'
import {TestimonialRow, TestimonialWrapper, Column1, Column2, TextWrapper, ImgWrap, Img, TestimonialContainer , TestimonialCard , TestiMonialImg  } from './TestimonialElement';
import feedback from '../../images/reviews.svg'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 10 }
];


const Testimonial = ({heading , data }) => {
  return (
    <TestimonialContainer id="testimonials">
        <Heading>{heading}</Heading>

    <TestimonialWrapper>
          <TestimonialRow imgStart={false}>
            <Column1>
              <TextWrapper>
              <Carousel breakPoints={breakPoints}>
                {data.map((testimonial, index) => {
                  return (
                    <TestimonialCard key={index}>
                    <TestiMonialImg src={testimonial.img} alt={testimonial.alt} />
                    </TestimonialCard>
                    )
                 })}
              </Carousel> 
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={feedback} alt='feedback' />
              </ImgWrap>
            </Column2>
          </TestimonialRow>
        </TestimonialWrapper>

    </TestimonialContainer>
  )
}

export default Testimonial
