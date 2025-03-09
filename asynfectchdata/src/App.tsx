import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import { RecoilRoot } from 'recoil'

function App() {


  return (
    <RecoilRoot>
      
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
      <Display />
        </Suspense>
    </RecoilRoot>
     
  )
}

export default App
