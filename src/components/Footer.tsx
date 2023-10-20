
import styled from 'styled-components';
import { device } from '../utils/variables';
import tg from '../images/tg.png';
import vk from '../images/vk.png';

const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 70px 150px;
  margin: 0;
  background-color: #c7c7c7;
  width: 100%;
    @media ${device.tablet} {
      padding: 50px 40px;
    }
    @media ${device.mobileL} {
      padding: 30px 20px;
    };
`;

const ContactsTitle = styled.h2`
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
  color: #ffffff;
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

const ContactsBlock = styled.div`
  display: flex;
  margin: 10px;
  max-width: 350px;
`;

const ContactsBlockText = styled.p`
  margin: 0;
  padding: 0 0 10px 0;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  text-align: left;
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
    };
`;

const ContactsLink = styled.a`
  margin: 0 15px 0 0;
  padding: 0 0 10px 0;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #ffe0e0;
  }
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
    };
`;

const ContactsLinkIcon = styled.img`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  width: 30px;
  height: 30px;
`;

function Footer(): JSX.Element {
  return (
    <ContactsSection> 
      <ContactsTitle>Контакты</ContactsTitle>
        
          <ContactsBlockText>
            Адрес: г. Москва, Комсомольский проспект, 15, м.Комсомольская, выход 2 (вход в дверь ПВЗ Wildberries).
          </ContactsBlockText>         
         <ContactsBlockText>Часы работы ПВЗ: пн-пт с 10-21<br/>
            Часы работы службы поддержки клиентов: пн-пт с 10-19
          </ContactsBlockText>
          <ContactsLink href='mailto:candelle@info.com'>
            candelle@info.com
          </ContactsLink>
          <ContactsLink href='tel:88009567101'>
          8(800)956-71-01
          </ContactsLink>
          <ContactsBlock>
            <ContactsLink target='_blank' href='#'>
              <ContactsLinkIcon src={tg}/>
            </ContactsLink>
            <ContactsLink target='_blank' href='#'>
              <ContactsLinkIcon src={vk} />
            </ContactsLink>
          </ContactsBlock>
    </ContactsSection>
  );
}

export default Footer;
