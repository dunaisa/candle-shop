
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";

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

function App(): JSX.Element {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />

        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
