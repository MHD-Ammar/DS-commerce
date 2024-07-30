import './App.css'
import { Footer, Header } from './containers'
import { Navbar } from './componentes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Card from './componentes/card/card';
import ProductContextProvider from './context/ProductsContext';
import Boys from './containers/Boys/Boys';
import Girls from './containers/Girls/Girls';
function App() {

  return (
    <>
      <ProductContextProvider>

      <Router>

        <Navbar />
        <Routes>
          <Route element={<Header />} path='/' />
          {/* <Route element={<Card />} path='/card' /> */}
          <Route element={<Boys />} path='/boys' />
          <Route element={<Girls />} path='/girls' />
        </Routes>
      </Router>
      </ProductContextProvider>

    </>
  )
}

export default App
