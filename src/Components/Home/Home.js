import React from 'react';
import { Link } from 'react-router-dom';
import CarouselPartOne from './CarouselPartOne/CarouselPartOne';
import CarouselPartThree from './CarouselPartThree/CarouselPartThree';
import CarouselPartTwo from './CarouselPartTwo/CarouselPartTwo';

const Home = () => {
    const hadeLine = {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#F7345F',
    }
    const TameName = {
        textAlign: 'center',
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#F7345F',
    }

    return (
        <div>
            <h1 style={TameName}>Cool Coder's</h1>
            <h2 style={hadeLine}>HAPPY NEW YEAR 2021</h2>
            <CarouselPartOne></CarouselPartOne>
            <CarouselPartTwo></CarouselPartTwo>
            <CarouselPartThree></CarouselPartThree>
            <Link path="/admin"><button>admin</button></Link>
        </div>
    );
};

export default Home;