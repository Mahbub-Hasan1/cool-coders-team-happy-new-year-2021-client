import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://i.imgur.com/6FPEOCW.jpg',
        thumbnail: 'https://i.imgur.com/6FPEOCW.jpg',
    },
    {
        original: 'https://i.imgur.com/MN30ySK.png',
        thumbnail: 'https://i.imgur.com/MN30ySK.png',
    },
    {
        original: 'https://i.imgur.com/zaln7Dn.png',
        thumbnail: 'https://i.imgur.com/zaln7Dn.png',
    },
    {
        original: 'https://i.imgur.com/QObwOST.png',
        thumbnail: 'https://i.imgur.com/QObwOST.png',
    },

    {
        original: 'https://i.imgur.com/oVe8tzD.png',
        thumbnail: 'https://i.imgur.com/oVe8tzD.png',
    },
    {
        original: 'https://i.imgur.com/Mzpi76N.png',
        thumbnail: 'https://i.imgur.com/Mzpi76N.png',
    },
    {
        original: 'https://i.imgur.com/YJhXxBQ.png',
        thumbnail: 'https://i.imgur.com/YJhXxBQ.png',
    },

];

const CarouselPartTwo = () => {
    return (
        <div>
            <ImageGallery items={images} />;
        </div>
    );
};

export default CarouselPartTwo;