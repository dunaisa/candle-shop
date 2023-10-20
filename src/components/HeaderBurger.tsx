import { useState } from "react";
import styled from 'styled-components';

const BurgerBtn = styled.label`
  background-color: transparent;
  position: fixed;
  top: 20px;
  right: 20px;
  height: 25px;
  width: 40px;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const BurgerMenu = styled.ul`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffe0e0;
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BurgerMenuItem = styled.li`
  color: #c7c7c7;
  margin: 0;
  padding: 0;
`;

const Buttonline = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#c7c7c7")};
  width: 100%;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #c7c7c7;
    width: 100%;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
  

function HeaderBurger (): JSX.Element {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <BurgerBtn onClick={handleClick}>
        <Buttonline clicked={click}></Buttonline>
      </BurgerBtn>
      <BurgerMenu clicked={click}>
        <BurgerMenuItem>Главная</BurgerMenuItem>
      </BurgerMenu>
    </>
  );
}

export default HeaderBurger;
