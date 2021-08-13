import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { GlobalStyle } from "./Globalstyles";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Hero></Hero>
        <Products></Products>
      </Router>

  );
}

export default App;
