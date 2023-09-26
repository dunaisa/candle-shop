import React from 'react';
import styled from 'styled-components/macro';
import promo from '../images/promo_img.jpg';
import MyBtnLink from './UI/button/MyBtn';

const PromoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${promo});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 40px;
  padding: 0;
  margin: 0;
  height: 100vh;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.3);
    z-index: 2;
  }
`;

const PromoTitle = styled.h1`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #ffffff;
  text-align: center;
  padding: 0;
  margin: 0;
  z-index: 3;
`;

const PromoSubTitle = styled.span`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  font-style: italic;
  padding: 0;
  margin: 0;
  z-index: 3;
`;

const PromoLogoText = styled.span`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 45px;
  color: #ffffff;
  text-align: center;
  padding: 0;
  margin: 0;
  z-index: 3;
`;

const Promo = () => {
  return (
    <PromoSection>
      <PromoLogoText>CANDELLE</PromoLogoText>
      <PromoSubTitle>горим с любовью</PromoSubTitle>
      <PromoTitle>Крупнейший российский производитель формовых и <br/> контейнерных свечей</PromoTitle>
      <MyBtnLink text="в каталог" zIndex="3"/>
      
    </PromoSection>
  );
}

export default Promo;
