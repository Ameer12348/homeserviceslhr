import React from 'react'
import Topnav from './components/header/Topnav'
import Header from './components/header/Header'
import Feature from './components/main/Feature'
import Achievment from './components/main/Achievment'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
     <Topnav/>
    <Header/>
    <Feature/>
    <Achievment/>
    <Footer/>
    </div>
  )
}

export default App