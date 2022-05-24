import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import BookCart from './components/BookCart'
import NotFound from './page/Error404'
import Form from './components/FormRefs'
// import LoginPass from './components/LoginPass'

function App() {

  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<BookCart />} />
          <Route path="/" element={<Form />} />
          {/* <Route path="/" element={<LoginPass />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App