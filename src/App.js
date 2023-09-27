import React from "react";
import styled from "styled-components/macro";
import Header from "./components/Header";
import Promo from "./components/Promo";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Form from "./components/Form";

const AppWrapper = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 1440px;
  min-width: 320px;
  padding: 0;
  font-family: 'Nunito', 'Arial', sans-serif;
  color: #000000;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppWrapper>
      {/* <Header/> */}
      <Promo/>
      <About/>
      <Form/>
      <Delivery/>
      <Footer/>
      
    </AppWrapper>
  );
};

export default App;
