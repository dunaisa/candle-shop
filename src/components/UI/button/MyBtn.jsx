import React from 'react';
import styled from 'styled-components/macro';

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  background-color: #ffe0e0;
  outline: none;
  margin: 0;
  max-width: 265px;
  width: 100%;
  padding: 15px 0;
  border: none;
  border-radius: 60px;
  letter-spacing: 2px;
  z-index: ${props => props.zIndex || 1};
`;



const MyBtnLink = ({text, ...props}) => {
  return (
    <ButtonLink {...props}>{text}</ButtonLink>
  );
}

export default MyBtnLink;
