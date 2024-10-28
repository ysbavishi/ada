import React, { useEffect } from 'react'
import { IconPaperclip } from '@tabler/icons-react';
import { useState } from 'react';

const FileBrowser = () => {

  const [files, setFiles] = useState(null);
  const [isDragging, setIsDraggin] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDraggin(true)
  }

  const handleDragLeave = (e) => {
    setIsDraggin(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log("test", e.dataTransfer.files[0])
    setFiles(e.dataTransfer.files[0])
  }

  useEffect(() => {
      console.log(files)
  }, [files])


  return (
    <div className='file_uploader-file_browser' 
        onDrop={handleChange}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        >
        <IconPaperclip stroke={2} size={60} />
        <p>Drag & Drop your documents here</p>
        <a href="not-determined">Click to browse</a>
    </div>
  )
}

export default FileBrowser