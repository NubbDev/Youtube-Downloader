import './App.css'
import { useState } from 'react'
import Tab from './components/Menu/Tab'
import FileTab from './components/Menu/FileTypesTab'
import {dialog} from '@tauri-apps/api'

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

  const [path, setPath] = useState<string>("")

  const openFolder = () => {
    dialog.open({
      directory: true,
      multiple: false
    }).then(res => {
      if(res) {
        console.log(res)
      }
    })
  }

  return (

    <>
      <h1>Youtube Downloader</h1>
      <div>
        <label>Path</label>
        <input type="text" placeholder="Path" value={path} onChange={(e) => {setPath(e.target.value)}}/>
        <button onClick={openFolder}>...</button>
      </div>
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
