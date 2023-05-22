import { useState } from 'react'
import Tab from './components/Menu/Tab'
import FileTab from './components/Menu/FileTypesTab'
import {dialog, invoke} from '@tauri-apps/api'

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

  const [link, setLink] = useState<string>("")

  const openFolder = () => {
    dialog.open({
      directory: true,
      multiple: false
    }).then(res => {
      if(res) {
        setPath(res.toString())
      }
    })
  }

  const download = async () => {
    console.log('click')
    await invoke("download", {path: path, link: link, file: fileType.id})
  }

  const linkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }
  const pathHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value)
  }

  return (

    <>
      <h1>Youtube Downloader</h1>
      <div>
        <label>Path</label>
        <input type="text" placeholder="Path" value={path} onChange={pathHandler}/>
        <button onClick={openFolder}>...</button>
      </div>
      <Tab changeTab={setTab}/>
      {tab == TabType.Song ?
      <div>
        <label>Song Link</label>
        <input type="text" placeholder="Song Link" onChange={linkHandler}/>

        <FileTab changeTab={setFileType} type={fileType}/>

        <button onClick={download}>Download</button>
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
