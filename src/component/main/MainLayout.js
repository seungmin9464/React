import { FlexContainer } from '../../style/styles';
import styled from 'styled-components';
import Header from './include/Header';
import FirstSection from './FirstSection';

const MainLayout = ({ children }) => {

  return (
    <WrapContainer>
      <Header/>
      <FlexContainer>{ children }</FlexContainer>
    </WrapContainer>
  );

};

export default MainLayout;

const WrapContainer = styled.main`
  min-height: 100%;
`