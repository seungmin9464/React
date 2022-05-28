import styled from 'styled-components';
import Footer from './components/view/Footer/Footer';
import LandingPage from './components/view/LandingPage/LandingPage';
import NavBar from './components/view/NavBar/NavBar';

const Net = () => {
    return (
        <MovieWrap>
            <NavBar/>
            <LandingPage/>
            <Footer/>
        </MovieWrap>
    );
};

export default Net;

const MovieWrap = styled.div`
    background-color: #000;
`