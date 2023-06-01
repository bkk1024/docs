'''
Author: 二师弟
Date: 2023-06-01 13:53:32
LastEditors: 二师弟
LastEditTime: 2023-06-01 14:05:53
Description: 线程锁 lock 测试
'''

import threading
from time import sleep

# 实例化线程锁
lock = threading.Lock()

class Account:
  def __init__(self, balance) -> None:
    self.balance = balance
    
def draw(account, amount):
  # 添加线程锁
  with lock:
    if account.balance >= amount:
      # sleep 会导致线程的阻塞，从而切换线程
      sleep(0.1)
      print(threading.current_thread().name, "取钱成功")
      account.balance -= amount
      print(threading.current_thread().name, f"余额：{account.balance}")
    else:
      print(threading.current_thread().name, "取钱失败，余额不足")
    

if __name__ == "__main__":
  account = Account(1000)
  # 启动两个线程
  ta = threading.Thread(name="ta", target=draw, args=(account, 800))
  tb = threading.Thread(name="tb", target=draw, args=(account, 800))
  
  ta.start()
  tb.start()