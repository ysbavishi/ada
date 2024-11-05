import React from 'react'
import FileBrowser from './components/FileBrowser'
import FilePreview from './components/FilePreview'
import  { IconX } from '@tabler/icons-react'
import { usePdfStore } from '../stores/pdfStore';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const pdfs = usePdfStore((state) => state.pdfs);
  const navigate = useNavigate();
  const addReponseDetails = usePdfStore((state) => state.addRespDetails)
  const uploadSingleFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfs[0]);
    fetch("http://localhost:8000/api/uploadSingleFile", {
      method: 'POST',
      body: formData,
    }).then(async(res) => {
      const respJson = await res.json()
      const content = JSON.parse(JSON.stringify(respJson)).response
      addReponseDetails(content)
      navigate("/view-pdf");
    }).catch((err) => {
      console.log(err);
    })
  }

  const uploadMultipleFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    pdfs.forEach(ele => formData.append("files", ele))
    fetch("http://localhost:8000/api/uploadMultipleFile", {
      method: 'POST',
      body: formData,
    }).then(async(res) => {
      const respJson = await res.json()
      const content = JSON.parse(JSON.stringify(respJson)).response
      addReponseDetails(content)
      navigate("/view-pdf");
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='file_uploader'>
      <div className='file_upload_wrapper'>
        <header>
          <h3>Upload and attach files</h3>
          <IconX stroke={2} size={20} color={'#f2ce72'} />
          </header>
        <FileBrowser />
        <div className='metadata'>
          <p>Supported Formats: PDF</p>
          <p>Maximum size: 20MB</p>
        </div>
        {
          pdfs.map((pdf, index) => <FilePreview key={index} name={pdf.name} />)
        }
        {/* <FilePreview /> */}
        <div className='file_uploader-btns'>
          <button>Cancel</button>
          <button onClick={(e) => uploadMultipleFile(e)}>Upload</button>
        </div>
       </div>
    </div>
  )
}

export default FileUpload