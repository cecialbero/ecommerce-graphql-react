import React from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

type Images = {
  source: 'string';
}

type Props = {
  spaceBetween: number;
  sliderPerView: number;
  name: string;
  images: Images[];
}


const Carousel = ({ images, name }: Props) => {
  const sliderContent = images.map(image => (
    {
      original: image.source,
      originalAlt: name
    }
  ));

  return (
    <ImageGallery items={sliderContent} showThumbnails={false} />
  )
}

export default Carousel
