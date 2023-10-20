
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../../../utils/variables';

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;  
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  background-color: #ffffff;
  color: #c7c7c7;
  
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



function MyBtnLink ({text, ...props}) : JSX.Element {
  return (
      <ButtonLink {...props}>{text}</ButtonLink>
  );
}

export default MyBtnLink;
