import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import BookContext, {book} from './context/books'

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>
    <BookContext.Provider value={book}>
    <Router>
      <App />
    </Router>
    </BookContext.Provider>
    
  </React.StrictMode>,
)

reportWebVitals();
