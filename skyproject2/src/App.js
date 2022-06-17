import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookDesk from './views/BookDesc'
import Order from './views/Order'
import NotFound from './views/E404'
import Form from './views/Form'
import UserOrder from './views/UserOrder'
import OrderReady from './views/OrderReady'

function App() {

  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/about" element={<BookDesk />} />
          <Route path="/home" element={<Order />} />
          <Route path="/userOrder" element={<UserOrder />} />
          <Route path="/orderReady" element={<OrderReady />} />
          <Route path="/" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App