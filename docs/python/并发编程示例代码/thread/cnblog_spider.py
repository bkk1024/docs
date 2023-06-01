'''
Author: 二师弟
Date: 2023-05-31 16:14:44
LastEditors: 二师弟
LastEditTime: 2023-05-31 17:02:45
Description: 爬虫程序
'''
import requests
from bs4 import BeautifulSoup

urls = [
  f"https://www.cnblogs.com#p{page}"
  for page in  range(1, 51)
]
def craw(url):
  r = requests.get(url)
  # print(url, len(r.text))
  return r.text
  
def parse(html):
  soup = BeautifulSoup(html, "html.parser")
  links = soup.find_all("a", attrs={"class": "post-item-title"})
  return [(link["href"], link.get_text()) for link in links]
# craw(urls[0])

# if __name__ == "__main__":
#   for res in parse(craw(urls[0])):
#     print(res)