import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../utils/variables';

const DeliverySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 150px;
  margin: 0;
  background-color: #ffffff;
  width: 100%;
    @media ${device.tablet} {
      padding: 50px 40px;
    };
    @media ${device.mobileL} {
      padding: 30px 20px;
    };
`;

const DeliveryTitle = styled.h2`
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
      margin: 0 0 35px 0;
    };
    @media ${device.mobileL} {
      font-size: 28px;
      line-height: 30px;
    };
`;

const DeliveryBlocks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  max-width: 350px;
`;

const DeliveryBlockTitle = styled.h3`
  margin: 0 0 30px 0;
  padding: 0;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  color: #ffe0e0;
    @media ${device.tablet} {
      font-size: 22px;
      line-height: 24px;
    };
`;

const DeliveryBlockText = styled.p`
  margin: 0;
  padding: 0 0 10px 0;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #c7c7c7;
  text-align: center;
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
    };
`;

const Delivery = () => {
  return (
    <DeliverySection>
      <DeliveryTitle>Доставка</DeliveryTitle>
      <DeliveryBlocks>
        <DeliveryBlock>
          <DeliveryBlockTitle>
            Москва внутри МКАД
          </DeliveryBlockTitle>
          <DeliveryBlockText>
            Осуществляется курьером по Москве в пределах МКАД.
          </DeliveryBlockText>
          <DeliveryBlockText>
            Заказы, оплаченные до 12:00, будут доставлены в день оформления заказа или любой другой удобный для вас день.
          </DeliveryBlockText>
          <DeliveryBlockText>
            Заказы, оплаченные после 12:00, доставляются на следующий рабочий день.
          </DeliveryBlockText>
          <DeliveryBlockText>
            Стоимость доставки 550 руб.
          </DeliveryBlockText>
        </DeliveryBlock>

        <DeliveryBlock>
          <DeliveryBlockTitle>
          За МКАД и по России
          </DeliveryBlockTitle>
          <DeliveryBlockText>
          Осуществляется курьерской службой СДЕК и Почта России.
          </DeliveryBlockText>
          <DeliveryBlockText>
          Внимание! Просьба проверять целостность упаковки и товаров при получении на СКЛАДЕ транспортной компании.
          </DeliveryBlockText>
          <DeliveryBlockText>
            Заказы, оплаченные после 12:00, передаются курьерской службе на следующий рабочий день.
          </DeliveryBlockText>
          <DeliveryBlockText>
          Стоимость доставки рассчитывается исходя из удаленности согласно тарифам логистической компании.
          </DeliveryBlockText>
        </DeliveryBlock>

        <DeliveryBlock>
          <DeliveryBlockTitle>
          Самовывоз
          </DeliveryBlockTitle>
          <DeliveryBlockText>
          Возможен самовывоз со склада ежедневно с 10:00 до 21:00 — после оформления заказа с вами свяжется наш менеджер и согласует удобное для вас время.
          </DeliveryBlockText>
          <DeliveryBlockText>
          г. Москва, Комсомольский проспект, 15, м.Комсомольская, выход 2 (вход в дверь ПВЗ Wildberries).
          </DeliveryBlockText>
          <DeliveryBlockText>
            Самовывоз бесплатно.
          </DeliveryBlockText>
        </DeliveryBlock>


      </DeliveryBlocks>      
    </DeliverySection>
  );
}

export default Delivery;
