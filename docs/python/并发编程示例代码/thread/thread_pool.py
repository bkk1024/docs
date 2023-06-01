'''
Author: 二师弟
Date: 2023-06-01 14:20:55
LastEditors: 二师弟
LastEditTime: 2023-06-01 14:31:18
Description: ThreadPoolExecutor 线程池的体验
'''

import concurrent.futures
from cnblog_spider import craw, parse, urls

# craw
with concurrent.futures.ThreadPoolExecutor() as pool:
  # urls 是一个列表
  htmls = pool.map(craw, urls)
  htmls = list(zip(urls, htmls))
  for url, html in htmls:
    print(url, len(html))
    
print("craw over")

# parse
with concurrent.futures.ThreadPoolExecutor() as pool:
  futures = {}
  for url, html in htmls:
    future = pool.submit(parse, html)
    futures[future] = url
  
  # 按顺序执行和输出
  for future, url in futures.items():
    print(url, future.result())
  
  # 谁先执行完，谁先输出，乱序的
  for future in concurrent.futures.as_completed(futures):
    url = futures[future]
    print(url, future.result())