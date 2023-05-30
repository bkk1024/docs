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

##  获取请求头 header

```python
from fastapi import FastAPI, Header
import uvicorn

app = FastAPI()

@app.get("/{msg}")
# 这里演示的是获取 token
async def root(msg, token = Header(None)):
  # 如果请求头里面没有 token，则返回的是 null
  return {"msg": msg, "token": token}

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

## 获取psot请求参数

### json

```python
from fastapi import FastAPI, Body
import uvicorn

app = FastAPI()

@app.post("/login")
# data 就是接口传递的 json 数据
def login(data = Body(None)):
  return data

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

### form表单格式数据(form-data)

```python
from fastapi import FastAPI, Form
import uvicorn

app = FastAPI()

@app.post("/login")
# data 就是接口传递的 json 数据
def login(username = Form(None), password = Form(None)):
  return {
    "username": username,
    "password": password
  }

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

完成上面的步骤后，我们会发现它提示：`Form data requires "python-multipart" to be installed.`，即我们需要`pip install python-multipart`安装这个模块后 ，python 才有处理 form 表单数据的能力。

等待安装完成后，再次运行程序，就可以看到返回结果了。

## 返回自定义信息、html、文件

### 返回定制信息

```python
from fastapi import FastAPI
# 导入定制返回信息的方法
from fastapi.responses import JSONResponse
import uvicorn

app = FastAPI()

@app.get("/user")
def user():
  """
    JSONResponse(): 定制返回信息
    content: 返回的数据信息
    status_code: 状态码
    headers: 请求头
  """
  return JSONResponse(content={
      "msg": "this is message"
    },
    status_code=202,
    headers={"a": "A"}
  )

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

### 返回html片段

```python
from fastapi import FastAPI
# 导入定制返回html的方法
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI()

@app.get("/user")
def user():
  html_content = """
    <html>
      <body>
        <div> 这是一个 html 片段 </div>
      </body>
    </html>
  """
  return HTMLResponse(content=html_content)

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

### 返回文件

```python
from fastapi import FastAPI
# 导入定制返回文件的方法
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

@app.get("/user")
def user():
  file_path = "seleniumDemo/codeimgs/fullbg.jpg"
  # 如果不填写 filename 字段，则不会弹出下载按钮，而是直接访问
  return FileResponse(file_path, filename="test.jpg")

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

## jinja2模板返回html页面

需要安装模块`pip install jinja2`

```python
from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()
# 实例化模板，告诉解析器html文件在哪个文件夹
template = Jinja2Templates("file")

@app.get("/")
# 这个 username 表示 query 参数
def user(username, req: Request):
  # 不填写 content={"request": req}会报错：Internal Server Error
  # index.html 表示要解析的文件名
  # 这个 name 表示 username 在前端页面中的映射名称，在标签中书写{{name}}即可使用
  return template.TemplateResponse("index.html", context={"request": req, "name": username})

if __name__ == "__main__":
  uvicorn.run(
    app="main:app",
    host="127.0.0.1",
    port=8000,
    reload=True
  )
```

