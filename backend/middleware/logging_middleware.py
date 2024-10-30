import datetime
from fastapi import Request
from fastapi import Response
from logger_setup import logger_setup

# Middleware to log each request
class LoggingMiddleWare:
    def __init__(self, logger: any):
        self.logger = logger
    async def __call__(self, request: Request, call_next) :
        self.logger.info(f"{datetime.datetime.now()} Request sent at " + str(request.url)  + " " + str(request.method))
        request.state.logger = self.logger
        response: Response = await call_next(request)
        self.logger.info(f"{datetime.datetime.time()} Response received at " + str(response.status_code))
        return response
        