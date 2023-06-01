'''
Author: 二师弟
Date: 2023-05-31 17:04:37
LastEditors: 二师弟
LastEditTime: 2023-05-31 17:23:43
Description: 生产者-消费者模式爬虫架构测试
'''

import queue
from cnblog_spider import craw, parse, urls
import time
import random
import threading

# 生产者
def do_craw(url_queue: queue.Queue, html_queue: queue.Queue):
  while True:
    url = url_queue.get()
    html = craw(url)
    html_queue.put(html)
    print(threading.current_thread().name, f"craw {url}", f"url_queue.size={url_queue.qsize()}")
    time.sleep(random.randint(1, 2))

# 消费者
def do_parse(html_queue: queue.Queue, fout):
  while True:
    html = html_queue.get()
    res = parse(html)
    for result in res:
      fout.write(str(result) + "\n")
    print(threading.current_thread().name, f"res.size {len(res)}", f"html_queue.size={html_queue.qsize()}")
    time.sleep(random.randint(1, 2))
    
if __name__ == "__main__":
  # 创建 url 队列和 html 队列
  url_queue = queue.Queue()
  html_queue = queue.Queue()
  
  for url in urls:
    url_queue.put(url)

  # 生产者线程
  for idx in range(3):
    t = threading.Thread(target=do_craw, args=(url_queue, html_queue), name=f"craw{idx}")
    t.start()
  
  # 消费者线程
  fout = open("producer_consumer_spider.txt", "w")
  for idx in range(2):
    t = threading.Thread(target=do_parse, args=(html_queue, fout), name=f"parse{idx}")
    t.start()