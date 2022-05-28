import React from 'react';
import Footer from './components/view/Footer/Footer';
import LandingPage from './components/view/LandingPage/LandingPage';
import NavBar from './components/view/NavBar/NavBar';

const Net = () => {
    return (
        <div>
            <NavBar/>
            <LandingPage/>
            <Footer/>
        </div>
    );
};

export default Net;