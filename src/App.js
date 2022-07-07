import React from 'react'
import StellarUpcoming from './StellarUpcoming'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <StellarUpcoming />
      </BrowserRouter>
    </>
  )
}

export default App