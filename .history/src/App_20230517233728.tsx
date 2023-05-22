import './App.css'
import { useState } from 'react'
import Tab from './components/Menu/Tab'

export enum TabType {
  Song, Playlist
}

function App() {

  const [tab, setTab] = useState<TabType>(TabType.Song)

  return (

    <>
      <Tab changeTab={setTab}/>
    </>
  )
}

export default App
