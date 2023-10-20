
import styled from 'styled-components';
import { device } from '../utils/variables';
import MyCard from '../components/UI/card/MyCard';

const CatalogSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 50px 40px;
  background-color: #ffffff;
    @media ${device.laptop} {
      padding: 50px 20px;
      
    };
    @media ${device.tablet} {
    };
`;

const CatalogTitle = styled.h2`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
  color: #c7c7c7;
  text-align: center;
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

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  align-items: stretch;
`;

function Catalog(): JSX.Element {
  return (
    <CatalogSection>
      <CatalogTitle>Каталог cвечей ручной работы</CatalogTitle>
      <CardsWrapper>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
      </CardsWrapper>
      
    </CatalogSection>
  );
}

export default Catalog;
