import { FC } from "react"
import { TabType } from "../../App"
import { useState } from 'react'


interface TabProps {
    changeTab: (tab: TabType) => void
}

const Tab:FC<TabProps> = () => {
    const [tab, setTab] = useState<TabType>(TabType.Song)

    return (
        <div>
            <button onClick={() => {setTab(TabType.Song)}}>
                Song
            </button>
            <button onClick={() => {setTab(TabType.Song)}}>
                Playlist
            </button>
        </div>
    )
}

export default Tab