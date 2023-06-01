'''
Author: 二师弟
Date: 2023-05-31 16:21:34
LastEditors: 二师弟
LastEditTime: 2023-05-31 17:03:26
Description: 单线程和多线程速度的测试
'''
from cnblog_spider import urls, craw
import threading
import time

# 单线程爬取
def single_thread():
  print("single_thread start")
  for url in urls:
    craw(url)
  print("single_thread end")
  
# 多线程爬取
def multi_thread():
  print("multi_thread start")
  threads = []
  for url in urls:
    # 创建多线程
    threads.append(
      # 因为这个 args 是个元组，所以这里加了个逗号
      threading.Thread(target=craw, args=(url,))
    )
  # 开启多线程
  for thread in threads:
    thread.start()
  # 等待多线程结束
  for thread in threads:
    thread.join()
  print("multi_thread end")
  
  
  
if __name__ == "__main__":
  start = time.time()
  single_thread()
  end = time.time()
  print(f"sigle time: {end - start}")
  
  start = time.time()
  multi_thread()
  end = time.time()
  print(f"multi time: {end - start}")
  pass