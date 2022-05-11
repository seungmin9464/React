import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === 'light' ? <BsFillMoonFill style={{ color: '#62009f' }}/> : <BsFillSunFill style= {{color: '#ffd8a7'}}/>}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: inherit;
  border: none;
  background-color: ${props => props.theme.bgColor};
  font-size: 20px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;