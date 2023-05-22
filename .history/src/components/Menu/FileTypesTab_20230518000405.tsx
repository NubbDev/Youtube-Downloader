import { FC } from "react"
import { FileType } from "../../App"
import { Listbox } from "@headlessui/react"

interface FileInterface {
    id: FileType,
    name: string,
    unavailable: boolean
}

interface FileTabProps {
    changeTab: (tab: FileInterface) => void
    type: FileInterface
}

const FileTab:FC<FileTabProps> = (prop) => {
    const file: FileInterface[] = [
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
        <Listbox value={prop.type} onChange={prop.changeTab}>
            <Listbox.Button>{prop.type.name}</Listbox.Button>
            <Listbox.Options>
                {file.map((file) => (
                    <Listbox.Option key={file.id} value={file} disabled={file.unavailable}>{file.name}</Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default FileTab