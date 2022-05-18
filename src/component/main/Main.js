import styled from 'styled-components';
import MainLayout from "./MainLayout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "./include/Footer";
import FourthSection from './include/fourth/FourthSection';

const Main = () => {

  return (
    <MainLayout>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </MainLayout>
  );
};

export default Main;