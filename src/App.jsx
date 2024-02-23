import { useState } from 'react'
import Section from './components/Section'
import Info from './components/Info'
import Education from './components/Education'
import './App.css'
import Employment from './components/Employment'

function App() {
  const [,] = useState()

  return (
    <>
    <Section>
      <Info />
    </Section>
    <Section>
      <Education />
    </Section>
    <Section>
      <Employment />
    </Section>
    </>
  )
}

export default App
