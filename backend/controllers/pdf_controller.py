import datetime
from fastapi import APIRouter, UploadFile, Request, File

router = APIRouter()

@router.post("/api/uploadSingleFile")
async def uploadFile(request: Request, file: list[UploadFile]):
    request.state.logger.info(f"{datetime.datetime.now()} Started processing single file")
    location = "C:\\Users\\ysbavishi\\Documents\\ada\\backend\\storage\\" + "temp.pdf" 
    request.state.logger.info(f"{datetime.datetime.now()} Writing file to disk")
    with open(location, 'wb') as wf:
        wf.write(file.file.read())
    request.state.logger.info(f"{datetime.datetime.now()} Finished writing file")
    return {"Result": "Ok"}

@router.post("/api/uploadMultipleFile")
async def uploadMultipleFile(request: Request, file: UploadFile):
    request.state.logger.info(f"{datetime.datetime.now()} Started processing multiple file")
    return {'file': str(file[0].filename)}