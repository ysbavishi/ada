import { useState } from 'react'
import './App.css'
import FileUpload from './pages/FileUpload'
import {createBrowserRouter ,  RouterProvider } from 'react-router-dom';
import FileViewer from './pages/fileViewer/FileViewer';
function App() {

  const router = createBrowserRouter([
    {
      'path': '/',
      'element': <FileUpload />
    },
    {
      'path': '/view-pdf',
      'element': <FileViewer />
    }
  ]
  )

  return (
    <>
      <RouterProvider router={router} disableErrorBoundary={true} />
    </>
  )
}

export default App
