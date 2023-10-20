
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components";
import App from './App';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>
);

