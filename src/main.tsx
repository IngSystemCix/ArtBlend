import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToolsBar } from './components/ToolsBar'
import { HamburgerMenu } from './components/HamburgerMenu'
import { Tools } from './components/Tools'
import { BottomTools } from './components/BottomTools'
import { Layer } from './components/Layer'
import { Author } from './components/Author'
import './index.css'

ReactDOM.createRoot(document.getElementById('toolsbard')!).render(
  <React.StrictMode>
    <Author/>
    <Layer/>
    <ToolsBar/>
    <HamburgerMenu/>
    <Tools/>
    <BottomTools/>
  </React.StrictMode>,
)