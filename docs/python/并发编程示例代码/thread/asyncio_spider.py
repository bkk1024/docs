'''
Author: 二师弟
Date: 2023-06-01 16:37:26
LastEditors: 二师弟
LastEditTime: 2023-06-01 16:56:21
Description: 异步io爬虫体验
'''
import asyncio
import aiohttp
import time

async def async_craw(url):
  # 控制并发量
  async with sem:
    print(f"craw url: {url}")
    async with aiohttp.ClientSession() as session:
      async with session.get(url) as resp:
        result = await resp.text()
        print(f"craw url: {url}, {len(result)}")
      
loop = asyncio.get_event_loop()
# 控制并发量
sem = asyncio.Semaphore(10)
urls = [
  f"https://www.cnblogs.com#p{page}"
  for page in  range(1, 51)
]
tasks = [
  loop.create_task(async_craw(url))
  for url in urls
]

start = time.time()
loop.run_until_complete(asyncio.wait(tasks))
end = time.time()
print(f"time is: {end - start}")