import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { FileType } from './App.tsx'
import './index.css'
import { invoke } from '@tauri-apps/api'

export const download = async (path: string, type: FileType) => {
  console.log('click')
  await invoke("download", {path: path, type: type})
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
