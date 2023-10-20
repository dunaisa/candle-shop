
import styled from 'styled-components';
import { device } from '../utils/variables';
import ideasIcon from '../images/ideas-icon.png';
import handMadeIcon from '../images/hand-made-icon.png';
import ecoIcon from '../images/eco-icon.png';
import deliveryIcon from '../images/delivery-icon.png';
import image_first from '../images/image-01.jpg';
import image_second from '../images/image-02.jpg';
import image_third from '../images/image-03.jpg';

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 150px;
  margin: 0;
  background-color: #ffffff;
    @media ${device.tablet} {
      padding: 50px 40px;
    };
    @media ${device.mobileL} {
      padding: 30px 20px;
    };
`;

const AboutTitle = styled.h2`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0 0 50px 0;
    @media ${device.tablet} {
      text-align: center;
    };
    @media ${device.mobileL} {
      font-size: 28px;
      line-height: 30px;
    };
`;

const AboutDescription = styled.p`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0 0 20px 0;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
  };
`;

const AboutImagesBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AboutImage = styled.img`
  max-width: 340px;
  width: 100%;
  padding: 15px;
  margin: 0;
`;

const AboutList = styled.ul`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
  };
`;

const AboutListItem = styled.li`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
  };
`;

const ItemIcon = styled.img`
  max-width: 100px;
  width: 100%;
  padding: 0 0 0 0;
  margin: 0;
  object-fit: cover;
  @media ${device.tablet} {
    max-width: 80px;
  };
`;

const ItemText = styled.p`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0 0 0 20px;
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
    };
`;

function About(): JSX.Element {
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
          <ItemText>Быстрая доставка в любую точку РФ. Под каждый заказ подберем индивидуальные условия доставки (СДЕК, Почта России, Яндекс доставка).</ItemText>
        </AboutListItem>
      </AboutList>
      <AboutDescription>Настоящая магия всегда связана с творчеством и воображением.<br/>
          У нас вы можете найти и купить свечи ручной работы — самые необычные, впитавшие частицу души изготовившего их мастера.
      </AboutDescription>
      <AboutDescription>
        Декоративные свечи — неизменный аксессуар, используемый для интерьерного дизайна, для оформления свадеб, юбилеев и просто для романтичеcких встреч. С помощью декоративных свечей можно найти любое решение интерьера, будь то классика или барокко, хай-тек или этно, кантри и даже конструктивизм. В зависимости от стиля, в котором решена комната, можно подобрать и свечи.
      </AboutDescription>
      <AboutDescription>
        Наш интернет-магазин Candelle осуществляет доставку Ваших заказов по Москве, Московской области и России.
      </AboutDescription>
      <AboutImagesBlock>
        <AboutImage src={image_first}/>
        <AboutImage src={image_second}/>
        <AboutImage src={image_third}/>
      </AboutImagesBlock>

    </AboutSection>
  );
}

export default About;
