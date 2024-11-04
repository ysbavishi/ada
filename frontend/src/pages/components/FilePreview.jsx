import React from 'react'
import { IconFileTypePdf, IconX, IconEye, IconAsteriskSimple} from '@tabler/icons-react';

const FilePreview = (props) => {
  return (
    <div className='file_uploader-file_previewer'>
        <div className='file_details_grid'>
          <IconFileTypePdf stroke={2} size={40} color={'#f2ce72'}/>
            <div>
              <p>{props.name.toUpperCase()}</p>
              <div>
                  <p>25</p>
                  <IconAsteriskSimple stroke={1} size={15} />
                  <p style={{'color': '#2bc265'}}>Successful</p>
              </div>
            </div>
        </div>
        <div className='file_uploader-operations'>
            <IconEye stroke={2} color={'#19b2e0'}/>
            <IconX stroke={2} color='red' />
        </div>

    </div>
  )
}

export default FilePreview