import styled from 'styled-components';
import { media } from './media_query';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0px 30px;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  height: 100vh;
  ${media.mobile` padding: 0 15px; `}
`;
