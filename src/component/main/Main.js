import styled from 'styled-components';
import MainLayout from "./MainLayout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "./include/Footer";

const Main = () => {

  return (
    <MainLayout>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </MainLayout>
  );
};

export default Main;