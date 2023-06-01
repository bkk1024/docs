'''
Author: 二师弟
Date: 2023-06-01 13:53:32
LastEditors: 二师弟
LastEditTime: 2023-06-01 16:18:43
Description: 使用线程池加速 web 服务测试
'''

from fastapi import FastAPI
import uvicorn
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from time import sleep

app = FastAPI()
pool = ThreadPoolExecutor()
# pool = ProcessPoolExecutor()

def read_file():
  sleep(0.1)
  return "file done"

def read_db():
  sleep(0.2)
  return "db done"

def read_api():
  sleep(0.3)
  return "api done"

@app.get("/")
def root():
  # 不使用线程池加速的情况下，这三个任务总耗时为三个任务之和，即大概 600ms
  # 使用线程池加速的情况下，这三个任务总耗时为三个任务中耗时最长的任务，即大概300ms
  res_file = pool.submit(read_file)
  res_db = pool.submit(read_db)
  res_api = pool.submit(read_api)
  return {
    "res_file": res_file.result(),
    "res_db": res_db.result(),
    "res_api": res_api.result(),
  }
  
if __name__ == "__main__":
  uvicorn.run(
    app="web_thread_pool:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )