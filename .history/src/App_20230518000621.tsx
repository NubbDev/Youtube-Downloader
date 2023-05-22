import './App.css'
import { useState } from 'react'
import Tab from './components/Menu/Tab'
import FileTab from './components/Menu/FileTypesTab'

export interface FileInterface {
  id: FileType,
  name: string,
  unavailable: boolean
}

export enum TabType {
  Song, Playlist
}
export enum FileType {
  mp3, mp4
}

function App() {

  const [tab, setTab] = useState<TabType>(TabType.Song)
  const [fileType, setFileType] = useState<FileInterface>({
    id: FileType.mp3,
    name: "mp3",
    unavailable: false
  })

  return (

    <>
      <Tab changeTab={setTab}/>
      {tab == TabType.Song ?
      <div>
        <label>Song Link</label>
        <input type="text" placeholder="Song Link" />

        <FileTab changeTab={setFileType} type={fileType}/>
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
