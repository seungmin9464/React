import styled from 'styled-components';
import { media } from './media_query';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  height: 100%;
  ${media.tablet`
    padding-top: 60px;
    height: 100%;
    min-height: 100vh;
  `}
  ${media.mobile` 
    height: inherit;
    min-height: 100%;
  `}
`;
