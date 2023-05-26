# FastAPI

## 安装fastapi

```sh
# 安装fastapi
pip install fastapi
# 安装服务器，用来启动 fastapi 项目
pip install uvicorn

# 或者可以直接，这个安装包括了 uvicorn
# pip install fastapi[all]
```

[教程 - 用户指南 - 简介 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/) 

## 简单起个服务

```python
""" 文件：main.py """
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/{msg}")
async def root(msg):
  return {"message": msg}

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

然后运行这个`main.py`文件，在浏览器输入`http://127.0.0.1/hi`，可以看到浏览器页面上有个`hi`。

