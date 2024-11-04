from fastapi import FastAPI
from fastapi import Request
from fastapi import Response
from logger_setup import logger_setup
from middleware.logging_middleware import LoggingMiddleWare
from controllers import pdf_controller
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:5173"]

logger = logger_setup()
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
app.include_router(pdf_controller.router)
app.add_middleware(BaseHTTPMiddleware, dispatch=LoggingMiddleWare(logger=logger))
