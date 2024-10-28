import React from 'react'
import FileBrowser from './components/FileBrowser'
import FilePreview from './components/FilePreview'
import {IconX} from '@tabler/icons-react'

const FileUpload = () => {
  return (
    <div className='file_uploader'>
       <header>
        <h3>Upload and attach files</h3>
        <IconX stroke={2} size={20} />
        </header>
       <FileBrowser />
       <div className='metadata'>
        <p>Supported Formats: PDF</p>
        <p>Maximum size: 20MB</p>
       </div>
       <FilePreview />
       <div className='file_uploader-btns'>
        <button>Cancel</button>
        <button>Upload</button>
       </div>
    </div>
  )
}

export default FileUpload