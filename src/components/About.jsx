import React from 'react';
import styled from 'styled-components/macro';
import ideasIcon from '../images/ideas-icon.png';
import handMadeIcon from '../images/hand-made-icon.png';
import ecoIcon from '../images/eco-icon.png';
import deliveryIcon from '../images/delivery-icon.png';

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 150px;
  margin: 0;
  background-color: #c7c7c7;
`;

const AboutTitle = styled.h2`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #ffffff;
  text-align: left;
  padding: 0;
  margin: 0 0 50px 0;
`;

const AboutList = styled.ul`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #ffffff;
  text-align: left;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

const AboutListItem = styled.li`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #ffffff;
  text-align: left;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
`;

const ItemIcon = styled.img`
  max-width: 100px;
  width: 100%;
  padding: 0 0 0 0;
  margin: 0;
  object-fit: cover;
`;

const ItemText = styled.p`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #ffffff;
  text-align: left;
  padding: 0;
  margin: 0 0 0 20px;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutTitle>О нас</AboutTitle>
      <AboutList>
        <AboutListItem>
          <ItemIcon src={handMadeIcon}/>
          <ItemText>Весь процесс создания происходит вручную&nbsp;&mdash; от создания скульптором формы до заливки свечей из английского воска.</ItemText>
        </AboutListItem>
        <AboutListItem>
          <ItemIcon src={ideasIcon}/>
          <ItemText>Большая ассортиментная матрица. От&nbsp;классических свечей в&nbsp;стакане до сложных высокополигональных моделей фигурных свечей.</ItemText>
        </AboutListItem>
        <AboutListItem>
          <ItemIcon src={ecoIcon}/>
          <ItemText>100&nbsp;% organic. В&nbsp;свечах мы используем натуральный соевый воск, французские отдушки&nbsp;и фитили высокого качества.</ItemText>
        </AboutListItem>
        <AboutListItem>
          <ItemIcon src={deliveryIcon}/>
          <ItemText>Быстрая доставка в любую точку РФ. Под каждый заказ подберем индивидуальные условия доставки (СДЕК, Почта России, Достависта, Яндекс доставка).</ItemText>
        </AboutListItem>
      </AboutList>
    </AboutSection>
  );
}

export default About;
