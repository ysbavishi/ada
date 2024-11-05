import logging

def logger_setup():
    logger = logging.getLogger(__name__)
    logging.basicConfig(filename = 'log.txt', encoding = 'utf-8', level=logging.INFO)
    return logger
