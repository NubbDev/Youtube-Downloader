import { FC } from "react"
import { TabType } from "../../App"


interface TabProps {
    changeTab: (tab: TabType) => void
}

const Tab:FC<TabProps> = (prop) => {


    return (
        <div>
            <button onClick={() => {prop.changeTab(TabType.Song)}}>
                Song
            </button>
            <button onClick={() => {prop.changeTab(TabType.Playlist)}}>
                Playlist
            </button>
        </div>
    )
}

export default Tab