import { useState } from 'react'


import './App.css'
import Contents from './Components/Main'
import ContentSection from './Components/ContentSection'
import ContentSection1 from './Components/ContentSection1'
import India from './Components/ContentSection3'
import Indian from './Components/ContentSection2'



function App() {
  
  return (
    <>
      <div>
        <Contents/>
        <ContentSection/>
        <ContentSection1/>
        <Indian/>
        <India/>
        
        
      </div>
  
    </>
  )
}

export default App
