import "./App.css";
import { Footer, Header, Boys, Girls, Home } from "./containers";
import { Navbar } from "./componentes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Card from './componentes/card/card';
import ProductContextProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route path="/products">
              <Route element={<Boys />} path="/products/boys" />
              <Route element={<Girls />} path="/products/girls" />
            </Route>
          </Routes>
        </Router>
      </ProductContextProvider>
    </>
  );
}

export default App;
