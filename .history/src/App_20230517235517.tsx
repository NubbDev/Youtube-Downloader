import './App.css'
import { useState } from 'react'
import Tab from './components/Menu/Tab'

export enum TabType {
  Song, Playlist
}
export enum FileType {
  mp3, mp4
}

function App() {

  const [tab, setTab] = useState<TabType>(TabType.Song)
  const [fileType, setFileType] = useState<FileType>(FileType.mp3)

  return (

    <>
      <Tab changeTab={setTab}/>
      {tab == TabType.Song ?
      <div>
        <label>Song Link</label>
        <input type="text" placeholder="Song Link" />


      </div>
       : 
       <div>
        <label>Playlist Link</label>
        <input type="text" placeholder="Playlist Link" />
      </div>
       }
    </>
  )
}

export default App
