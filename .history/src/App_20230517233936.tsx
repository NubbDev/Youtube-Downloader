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
      {tab == TabType.Song ? <div>Song</div> : <div>Playlist</div> }
    </>
  )
}

export default App
