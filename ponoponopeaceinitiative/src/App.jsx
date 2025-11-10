import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import {Link} from "react-router-dom"

function App() {

  return (
    <>
      <div>
        This is the main page
      </div>
      <Link to="/contact">
        Go to contact page wip
      </Link>
      <Footer />
    </>
  );
}

export default App
