
import styled from 'styled-components';
import { device } from '../../../utils/variables';
import MyBtn from '../button/MyBtn';
import image_first from '../../../images/image-01.jpg';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.50);
  max-width: 260px;
  padding: 0 0 20px 0;
    @media ${device.mobileL} {
      max-width: 380px;
    };
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 250px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px 0;
`;

const CardTitle = styled.h3`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0;
`;

const CardSubTitle = styled.p`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0;
  
`;

const CardPrice = styled.p`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #c7c7c7;
  text-align: left;
  padding: 0;
  margin: 0;  
`;

const CardBtn = styled(MyBtn)`
  align-self: center;
  width: 150px;
  font-size: 15px;
  line-height: 17px;
  margin-top: auto;
  padding: 10px 0;
`;

function MyCard(): JSX.Element {
  return (
    <CardWrapper>
      <CardImg src={image_first}/>
      <CardContent>
        <CardTitle>Лимитированная коллекция свечей "Менталитет" & Chandelle</CardTitle>
        <CardSubTitle>Свеча с деревянным фитилем 120 мл</CardSubTitle>
        <CardPrice>1 870р.</CardPrice>
        <CardBtn text="в корзину"/>
      </CardContent>      
    </CardWrapper>
  );
}

export default MyCard;
