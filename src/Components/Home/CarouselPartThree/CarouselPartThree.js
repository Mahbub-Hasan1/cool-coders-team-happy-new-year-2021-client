import React from 'react';
import Gallery from 'react-grid-gallery';


const IMAGES =
    [{
        src: "https://i.imgur.com/0I1qRSW.jpg",
        thumbnail: "https://i.imgur.com/0I1qRSW.jpg",
        thumbnailWidth: 255,
        thumbnailHeight: 220,
        tags: [{ value: "Mahbub Hasan", title: "Mahbub Hasan" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Mahbub Hasan"
    },
    {
        src: "https://i.imgur.com/hd9vXK8.jpg",
        thumbnail: "https://i.imgur.com/hd9vXK8.jpg",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        tags: [{ value: "Rizwan rashid", title: "Rizwan rashid" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Rizwan rashid"
    },
    {
        src: "https://i.imgur.com/fU9tLzV.jpg",
        thumbnail: "https://i.imgur.com/fU9tLzV.jpg",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        tags: [{ value: "Rizvy Ahamed", title: "Rizvy Ahamed" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Rizvy Ahamed"
    },
    {
        src: "https://i.imgur.com/eCHtGUE.jpg",
        thumbnail: "https://i.imgur.com/eCHtGUE.jpg",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        tags: [{ value: "Mohammad Fahad", title: "Mohammad Fahad" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Mohammad Fahad"
    },
    {
        src: "https://i.imgur.com/bRCiSYp.jpg",
        thumbnail: "https://i.imgur.com/bRCiSYp.jpg",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        tags: [{ value: "Mohammad Hasan", title: "Mohammad Hasan" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Mohammad Hasan"
    },

    {
        src: "https://i.imgur.com/dGJZUeG.jpg",
        thumbnail: "https://i.imgur.com/dGJZUeG.jpg",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        tags: [{ value: "Shabnam Priyanka", title: "Shabnam Priyanka" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        caption: "Shabnam Priyanka"
    },
    // -
    {
        src: "https://i.imgur.com/oR5PRce.png",
        thumbnail: "https://i.imgur.com/oR5PRce.png",
        thumbnailWidth: 355,
        thumbnailHeight: 220,
        // tags: [{ value: "Mahbub Hasan", title: "Mahbub Hasan" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Mahbub Hasan"
    },
    {
        src: "https://i.imgur.com/Yco3nxZ.jpg",
        thumbnail: "https://i.imgur.com/Yco3nxZ.jpg",
        thumbnailWidth: 305,
        thumbnailHeight: 220,
        // tags: [{ value: "Rizwan rashid", title: "Rizwan rashid" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Rizwan rashid"
    },
    {
        src: "https://i.imgur.com/CEEWh77.jpg",
        thumbnail: "https://i.imgur.com/CEEWh77.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 220,
        // tags: [{ value: "Rizvy Ahamed", title: "Rizvy Ahamed" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Rizvy Ahamed"
    },
    {
        src: "https://i.imgur.com/g2YOBCE.jpg",
        thumbnail: "https://i.imgur.com/g2YOBCE.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 220,
        // tags: [{ value: "Mohammad Fahad", title: "Mohammad Fahad" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Mohammad Fahad"
    },
    {
        src: "https://i.imgur.com/zSo9vtP.jpg",
        thumbnail: "https://i.imgur.com/zSo9vtP.jpg",
        thumbnailWidth: 255,
        thumbnailHeight: 220,
        // tags: [{ value: "Mohammad Hasan", title: "Mohammad Hasan" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Mohammad Hasan"
    },
    {
        src: "https://i.imgur.com/KJNQPJ7.png",
        thumbnail: "https://i.imgur.com/KJNQPJ7.png",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        // tags: [{ value: "Shabnam Priyanka", title: "Shabnam Priyanka" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Shabnam Priyanka"
    },
    {
        src: "https://i.imgur.com/HKF0VQ0.png",
        thumbnail: "https://i.imgur.com/HKF0VQ0.png",
        thumbnailWidth: 265,
        thumbnailHeight: 220,
        // tags: [{ value: "Shabnam Priyanka", title: "Shabnam Priyanka" }, { value: "MERN Stack Web Developer", title: "MERN Stack Web Developer" }],
        // caption: "Shabnam Priyanka"
    },
    ]

const CarouselPartThree = () => {
    return (
        <div style={{ background: '#111430' }}>
            <Gallery images={IMAGES} />,
        </div>
    );
};

export default CarouselPartThree;