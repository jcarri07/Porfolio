import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Main/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column' , width: 'auto', height: '100vh'}}>
      <Main />
    </div>
  </React.StrictMode>,
)
