
import styled from 'styled-components';
import { device } from '../../../utils/variables';

const Button = styled.button`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #c7c7c7;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  background-color: #ffffff;
  outline: none;
  margin: 0;
  max-width: 265px;
  width: 100%;
  padding: 15px 0;
  border: 1px solid #c7c7c7;
  border-radius: 60px;
  letter-spacing: 2px;
  z-index: ${props => props.zindex || 1};
  cursor: pointer;
  transition: 0.5s;
    &:hover {
      background-color: #ffe0e0;
      border: 1px solid #ffe0e0;
      color: #ffffff;
    };
    @media ${device.tablet} {
      font-size: 20px;
      line-height: 22px;
    };
`;



function MyBtn({text, ...props}): JSX.Element {
  return (
    <Button {...props}>{text}</Button>
  );
}

export default MyBtn;
