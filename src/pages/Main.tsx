
// import Header from "./components/Header";
import Promo from "../components/Promo";
import About from "../components/About";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Main(): JSX.Element {
  return (
    <>
      {/* <Header/> */}
      <Promo/>
      <About/>
      <Form/>
      <Delivery/>
      <Footer/>      
    </>
  );
}

export default Main;
