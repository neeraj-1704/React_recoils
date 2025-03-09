import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import { RecoilRoot } from 'recoil'

function App() {


  return (
    <RecoilRoot>
      <Display />
    </RecoilRoot>
     
  )
}

export default App
