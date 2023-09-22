import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Todopage from './pages/Todopage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='container section flow'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/todo" element={<Todopage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App