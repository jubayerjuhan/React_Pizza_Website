import { BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./Globalstyles";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import { productData, productDataTwo} from "./Components/Products/data";
import Desert from "./Components/Desert/Desert";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Hero></Hero>
        <Products heading="Choose Your Fav Pizza" data={productData}/>
        <Feature/>
        <Desert heading="Choose Your Fav Desert" data={productDataTwo}></Desert>
        <Footer/>
      </Router>

  );
}

export default App;
