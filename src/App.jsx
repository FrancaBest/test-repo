import './css/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/About/'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  // JSX allows us to combine both JS and HTML
  return (
    <>
    {/* <Home/>
    <About/>
    <Products/> */}
    <BrowserRouter>
    <NavBar/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </>
    // {Router pages}
  )
}

export default App