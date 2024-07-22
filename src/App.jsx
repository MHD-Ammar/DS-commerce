import './App.css'
import { Footer, Header } from './containers'
import { Navbar, Product } from './componentes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route element={<Header />} path='/' />
        </Routes>
      </Router>

    </>
  )
}

export default App
