import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { GlobalStyle } from "./Globalstyles";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import { productData } from "./Components/Products/data";

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Hero></Hero>
        <Products heading="Choose Your Fav Pizza" data={productData}/>
      </Router>

  );
}

export default App;
