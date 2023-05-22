import { FC } from "react"
import { FileType } from "../../App"
import { Listbox } from "@headlessui/react"

interface FileTabProps {
    changeTab: (tab: FileType) => void
    type: FileType
}

const FileTab:FC<FileTabProps> = (prop) => {
    const file = [
        {
            id: FileType.mp3,
            name: "mp3",
            unavailable: false
        },
        {
            id: FileType.mp4,
            name: "mp4",
            unavailable: false
        }
    ]
    return (

    )
}

export default FileTab