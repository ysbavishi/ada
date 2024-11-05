import datetime
from fastapi import APIRouter, UploadFile, Request, File
from services.pdf_parser import process_pdf
router = APIRouter()

@router.post("/api/uploadSingleFile")
async def uploadFile(request: Request, file: UploadFile):
    request.state.logger.info(f"{datetime.datetime.now()} Started processing single file")
    location = "C:\\Users\\ysbavishi\\Documents\\ada\\frontend\\public\\" +  file.filename
    request.state.logger.info(f"{datetime.datetime.now()} Writing file to disk")
    with open(location, 'wb') as wf:
        wf.write(file.file.read())
    answer = process_pdf(location)
    request.state.logger.info(f"{datetime.datetime.now()} Finished writing file")
    return {"response" : [{"location": location, "filename": file.filename, "content": answer}]}


@router.post("/api/uploadMultipleFile")
async def uploadMultipleFile(request: Request, files: list[UploadFile]):
    request.state.logger.info(f"{datetime.datetime.now()} Started processing multiple file")
    request.state.logger.info(f"{datetime.datetime.now()} Writing multiple files to disk")
    response = []
    for file in files:
        location = "C:\\Users\\ysbavishi\\Documents\\ada\\frontend\\public\\" +  file.filename
        with open(location, 'wb') as wf:
            wf.write(file.file.read())
        answer = process_pdf(location)
        response.append({"location": location, "filename": file.filename, "content": answer})
    request.state.logger.info(f"{datetime.datetime.now()} Finished writing multiple files to disk")

    return {'response': response}