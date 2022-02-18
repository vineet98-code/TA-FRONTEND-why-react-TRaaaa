import React from 'react'
import  Articles  from './components/Articles'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <Footer /> 
    </div>
  )
}

export default App