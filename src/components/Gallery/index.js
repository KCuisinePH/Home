import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import image1 from '../../images/Gallery/image1.jpeg'
import image2 from '../../images/Gallery/image2.jpeg'
import image3 from '../../images/Gallery/image3.jpeg'
import image4 from '../../images/Gallery/image4.jpeg'
import image5 from '../../images/Gallery/image5.jpeg'
import image6 from '../../images/Gallery/image6.jpeg'
import image7 from '../../images/Gallery/image7.jpeg'
import image8 from '../../images/Gallery/image8.jpeg'
import image9 from '../../images/Gallery/image9.jpeg'
import image10 from '../../images/Gallery/image10.jpeg'
import image11 from '../../images/Gallery/image11.jpeg'
import image12 from '../../images/Gallery/image12.jpeg'
import image13 from '../../images/Gallery/image13.png'
import image14 from '../../images/Gallery/image14.jpeg'
import image15 from '../../images/Gallery/image15.png'
import image16 from '../../images/Gallery/image16.jpeg'
import image17 from '../../images/Gallery/image17.jpeg'
import image18 from '../../images/Gallery/image18.jpeg'
import image19 from '../../images/Gallery/image19.jpeg'
import image20 from '../../images/Gallery/image20.jpeg'
import image21 from '../../images/Gallery/image21.jpeg'
import image22 from '../../images/Gallery/image22.jpeg'
import image23 from '../../images/Gallery/image23.jpeg'
import image24 from '../../images/Gallery/image24.jpeg'
import image25 from '../../images/Gallery/image25.jpeg'
import image26 from '../../images/Gallery/image26.jpeg'
import image27 from '../../images/Gallery/image27.jpeg'
import image28 from '../../images/Gallery/image28.jpeg'
import image29 from '../../images/Gallery/image29.png'
import image30 from '../../images/Gallery/image30.jpeg'
import image31 from '../../images/Gallery/image31.jpeg'
import image32 from '../../images/Gallery/image32.jpeg'
import image33 from '../../images/Gallery/image33.jpeg'
import image34 from '../../images/Gallery/image34.jpeg'
import image35 from '../../images/Gallery/image35.jpeg'
import image36 from '../../images/Gallery/image36.jpeg'
import image37 from '../../images/Gallery/image37.png'
import image38 from '../../images/Gallery/image38.png'
import image39 from '../../images/Gallery/image39.jpeg'
import image40 from '../../images/Gallery/image40.jpeg'
import image41 from '../../images/Gallery/image41.jpeg'
import image42 from '../../images/Gallery/image42.jpeg'
import image43 from '../../images/Gallery/image43.jpeg'
import image44 from '../../images/Gallery/image44.jpeg'
import image45 from '../../images/Gallery/image45.jpeg'
import image46 from '../../images/Gallery/image46.jpeg'
import image47 from '../../images/Gallery/image47.jpeg'
import image48 from '../../images/Gallery/image48.jpeg'
import image49 from '../../images/Gallery/image49.jpeg'
import image50 from '../../images/Gallery/image50.jpeg'
import image51 from '../../images/Gallery/image51.jpeg'
import image52 from '../../images/Gallery/image52.jpeg'
import image53 from '../../images/Gallery/image53.jpeg'

import {GalleryContainer, Heading } from '../MenuSection/MenuElement'

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
  {
    original: image7,
    thumbnail: image7,
  },
  {
    original: image8,
    thumbnail: image8,
  },
  {
    original: image9,
    thumbnail: image9,
  },
  {
    original: image10,
    thumbnail: image10,
  },
  {
    original: image11,
    thumbnail: image11,
  },
  {
    original: image12,
    thumbnail: image12,
  },

  {
    original: image13,
    thumbnail: image13,
  },
  {
    original: image14,
    thumbnail: image14,
  },
  {
    original: image15,
    thumbnail: image15,
  },
  {
    original: image16,
    thumbnail: image16,
  },
  {
    original: image17,
    thumbnail: image17,
  },
  {
    original: image18,
    thumbnail: image18,
  },
  {
    original: image19,
    thumbnail: image19,
  },
  {
    original: image20,
    thumbnail: image20,
  },
  {
    original: image21,
    thumbnail: image21,
  },
  {
    original: image22,
    thumbnail: image22,
  },
  {
    original: image23,
    thumbnail: image23,
  },
  {
    original: image24,
    thumbnail: image24,
  },
  {
    original: image25,
    thumbnail: image25,
  },
  {
    original: image26,
    thumbnail: image26,
  },
  {
    original: image27,
    thumbnail: image27,
  },
  {
    original: image28,
    thumbnail: image28,
  },
  {
    original: image29,
    thumbnail: image29,
  },
  {
    original: image30,
    thumbnail: image30,
  },
  {
    original: image31,
    thumbnail: image31,
  },
  {
    original: image32,
    thumbnail: image32,
  },
  {
    original: image33,
    thumbnail: image33,
  },
  {
    original: image34,
    thumbnail: image34,
  },
  {
    original: image35,
    thumbnail: image35,
  },
  {
    original: image36,
    thumbnail: image36,
  },
  {
    original: image37,
    thumbnail: image37,
  },
  {
    original: image38,
    thumbnail: image38,
  },
  {
    original: image39,
    thumbnail: image39,
  },
  {
    original: image40,
    thumbnail: image40,
  },
  {
    original: image41,
    thumbnail: image41,
  },
  {
    original: image42,
    thumbnail: image42,
  },
  {
    original: image43,
    thumbnail: image43,
  },
  {
    original: image44,
    thumbnail: image44,
  },
  {
    original: image45,
    thumbnail: image45,
  },
  {
    original: image46,
    thumbnail: image46,
  },
  {
    original: image47,
    thumbnail: image47,
  },
  {
    original: image48,
    thumbnail: image48,
  },
  {
    original: image49,
    thumbnail: image49,
  },
  {
    original: image50,
    thumbnail: image50,
  },
  {
    original: image51,
    thumbnail: image51,
  },
  {
    original: image52,
    thumbnail: image52,
  },
  {
    original: image53,
    thumbnail: image53,
  }
];




const Gallery = ({heading}) => {
  return (
    <GalleryContainer id="gallery">
        <Heading>{heading}</Heading>
        <ImageGallery items={images} />
    </GalleryContainer>
  )
}

export default Gallery
