from fastapi import FastAPI
from fastapi import Request
from fastapi import Response
from logger_setup import logger_setup
from middleware.logging_middleware import LoggingMiddleWare
from controllers import pdf_controller
from starlette.middleware.base import BaseHTTPMiddleware

logger = logger_setup()
app = FastAPI()
app.include_router(pdf_controller.router)
app.add_middleware(BaseHTTPMiddleware, dispatch=LoggingMiddleWare(logger=logger))
