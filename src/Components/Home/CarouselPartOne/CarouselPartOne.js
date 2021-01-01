import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import WebIcon from '@material-ui/icons/Web';
import * as VFX from 'react-vfx';

const allImg = [
    {
        id: 4,
        img: 'https://i.imgur.com/0I1qRSW.jpg',
        name: 'Mahbub Hasan',
        PortfolioWebsite: 'https://mahbub-hasan.netlify.app',
    },
    {
        id: 5,
        img: 'https://i.imgur.com/hd9vXK8.jpg',
        name: 'Rizwan rashid',
        PortfolioWebsite: 'https://rizwan-rashid.netlify.app/',
    },
    {
        id: 6,
        img: 'https://i.imgur.com/fU9tLzV.jpg',
        name: 'Rizvy Ahamed',
        PortfolioWebsite: '',
    },
    {
        id: 7,
        img: 'https://i.imgur.com/eCHtGUE.jpg',
        name: 'Mohammad Fahad',
        PortfolioWebsite: "https://portfolio-of-mohammadfahad.netlify.app/"
    },
    {
        id: 8,
        img: 'https://i.imgur.com/bRCiSYp.jpg',
        name: 'Mohammad Hasan',
        PortfolioWebsite: '',
    },
    {
        id: 9,
        img: 'https://i.imgur.com/dGJZUeG.jpg',
        name: 'Shabnam Priyanka',
        PortfolioWebsite: '',
    },
    {
        id: 10,
        img: 'https://i.imgur.com/0I1qRSW.jpg',
        name: 'Mahbub Hasan',
        PortfolioWebsite: 'https://mahbub-hasan.netlify.app',
    },
    {
        id: 11,
        img: 'https://i.imgur.com/hd9vXK8.jpg',
        name: 'Rizwan rashid',
        PortfolioWebsite: 'https://rizwan-rashid.netlify.app',
    },
    {
        id: 12,
        img: 'https://i.imgur.com/fU9tLzV.jpg',
        name: 'Rizvy Ahamed',
        PortfolioWebsite: '',
    },
]

const CarouselPartOne = () => {

    return (
        <div>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={6}
                slidesToShow={6}
                scrollOnDevice={true}
            >


                {
                    allImg.map(image =>
                        <div key={image.id}>

                            <VFX.VFXProvider>
                                <VFX.VFXImg src={image.img} alt="image" shader="rgbShift" />

                                <h5 style={{ color: '#ffff' }} className="text-center">
                                    <VFX.VFXSpan shader="rainbow">{image.name}</VFX.VFXSpan>
                                </h5>

                                <p className="text-center">
                                    <a href={image.PortfolioWebsite} target="_blank">
                                        <WebIcon style={{ color: '#F7345F' }} />
                                    </a>
                                </p>

                            </VFX.VFXProvider>

                        </div >
                    )
                }
            </InfiniteCarousel>
        </div>
    );
};

export default CarouselPartOne;