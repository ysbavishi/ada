import React from 'react'
import { IconFileTypePdf, IconX, IconEye, IconAsteriskSimple} from '@tabler/icons-react';

const FilePreview = () => {
  return (
    <div className='file_uploader-file_previewer'>
        <div className='file_details_grid'>
        <IconFileTypePdf stroke={2} />
        <div className='file_details'>
            <p>File Name will come here</p>
            <div>
                <p>File Size will come here</p>
                <IconAsteriskSimple stroke={1} size={15} />
                <p>Uploading Status</p>
            </div>
        </div>
        </div>
        <div>
            <IconEye stroke={2} />
            <IconX stroke={2} color='red' />
        </div>

    </div>
  )
}

export default FilePreview