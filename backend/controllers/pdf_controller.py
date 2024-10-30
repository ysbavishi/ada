import datetime
from fastapi import APIRouter, UploadFile, Request

router = APIRouter()

@router.post("/api/uploadFile")
async def uploadFile(request: Request):
    request.state.logger.info(f"{datetime.datetime.now()} Started uploading file")

    return {'file': str(request.url)}
