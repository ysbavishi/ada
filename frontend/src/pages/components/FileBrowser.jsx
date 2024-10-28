import React from 'react'
import { IconPaperclip } from '@tabler/icons-react';

const FileBrowser = () => {
  return (
    <div className='file_uploader-file_browser'>
        <IconPaperclip stroke={2} size={60} />
        <p>Drag & Drop your documents here</p>
        <a href="not-determined">Click to browse</a>
    </div>
  )
}

export default FileBrowser