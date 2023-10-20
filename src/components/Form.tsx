
import styled from 'styled-components';
import { device } from '../utils/variables';
import formImg from "../images/form-img.jpg"
import MyBtn from './UI/button/MyBtn';

const FormSection = styled.div`
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

const FormSWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  @media ${device.laptop} {
    flex-wrap: wrap;
  };
`;

const FormTitle = styled.h2`
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

const FormImg = styled.img`
  max-width: 340px;
  width: 100%;
  padding: 15px;
  margin: 0;
`;

const FormField = styled.form`
  max-width: 540px;
  width: 100%;
  padding: 15px;
  margin: 0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin: 0 0 35px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #c7c7c7;
  overflow: hidden;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #c7c7c7;
  text-align: left;
    &::placeholder {
      color: #c7c7c7;
    }
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
      margin: 0 0 20px 0;
    };
`;

const FormTextaria = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px 15px;
  margin: 0 0 40px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #c7c7c7;
  overflow: hidden;
  font-family: 'Nunito', 'Arial', sans serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #c7c7c7;
  text-align: left;
  resize: none;
  &::placeholder {
    color: #c7c7c7;
  }
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 22px;
    };
`;

function Form(): JSX.Element {
  return (
    <FormSection>
      <FormTitle>Заказать обратный звонок</FormTitle>
      <FormSWrapper>
        <FormImg src={formImg} />
        <FormField>
          <FormInput type="text" name="name" id="name" placeholder="Ваше имя" required/>
          <FormInput type="text" name="text" id="text" placeholder="Ваш телефон" required/>
          <FormTextaria name="name" id="name" placeholder="Ваш комментарий" required/>
          <MyBtn text="отправить"/>


        </FormField>
      </FormSWrapper>
    </FormSection>
  );
}

export default Form;
