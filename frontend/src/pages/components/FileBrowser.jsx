import React, { useState, useEffect } from 'react'
import  { IconPaperclip } from '@tabler/icons-react/';
import { usePdfStore } from '../../stores/pdfStore';

const FileBrowser = () => {

  const [files, setFiles] = useState(null);
  const [isDragging, setIsDraggin] = useState(false);
  const pdfs = usePdfStore((state) => state.pdfs);
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggin(true)
  }

  const handleDragLeave = (e) => {
    setIsDraggin(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const addPdfsToStore = usePdfStore((state) => state.addPdfs);
  const handleChange = (e) => {
    e.preventDefault();
    addPdfsToStore(e.dataTransfer.files[0])
  }

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