import { useEffect, useState } from "react";
import { usePdfStore } from "../../stores/pdfStore"
import Tabs from "./components/Tabs";

const FileViewer = () => {
    const respDetails = usePdfStore((state) => state.responseDetails);
    const [activePdf, setActivePdf] = useState(respDetails[0]);
    const [active, setActive] = useState(0);

    return (
        <div className="file_viewer">
            <div className="file_viewer-tab_container">
                {respDetails.map((ele, index) => <Tabs file={ele} key={index} setActivePdf={setActivePdf} setActive={setActive} active={active} inde={index}/>)} 
           </div>
           <div className="file_viewer-hero">
            <iframe src={activePdf.filename}/>
            <p>{activePdf.content}</p>
           </div>
        </div>
    )
}

export default FileViewer