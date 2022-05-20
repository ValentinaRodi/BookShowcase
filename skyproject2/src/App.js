import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import BookCart from './components/BookCart'
import NotFound from './page/Error404'
import ColorNumber from './components/ColorNumber'

function App() {

  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<BookCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ColorNumber/>
      </div>
    </div>
    
  )
}

export default App