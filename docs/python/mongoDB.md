# mongoDB

## 安装连接数据库的模块

`pip install pymongo`

## 连接数据库

```python
# 导入模块
import pymongo

# 通过端口连接数据库，这个端口里面可以有很多个库
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# 创建或连接指定的数据库
mydb = myclient["shangjiaosuo"]
# 连接这个库里面指定的集合，集合就是存储数据的
sjs = mydb["sjs_test"]
```

## 插入数据

### 插入一条数据

```python
# 如果没指定_id，则数据库会自动生成id
data = {
  "name": "zhangsan",
  "age": 18,
  "sex": "male"
}

# 插入一个数据, sjs 为一个集合，它会返回这条数据的 _id
x = sjs.insert_one(data)
```

### 插入多条数据

```python
mylist = [
  { "name": "Taobao", "alexa": "100", "url": "https://www.taobao.com" },
  { "name": "QQ", "alexa": "101", "url": "https://www.qq.com" },
  { "name": "Facebook", "alexa": "10", "url": "https://www.facebook.com" },
  { "name": "知乎", "alexa": "103", "url": "https://www.zhihu.com" },
  { "name": "Github", "alexa": "109", "url": "https://www.github.com" }
]

# 返回所有数据对应的 _id
x = sjs.insert_many(mylist)
```

## 查询数据

### 查询一条数据

```python
# 返回集合中的第一条数据
x = sjs.find_one()
```

### 查询集合中所有数据

```python
# 返回集合中的所有数据
list = sjs.find()

for li in list:
  print(li)
```

### 查询指定字段的数据

```python
# 将要返回的字段设置为1，如这里要返回 name 和 alexa 字段
list = sjs.find({}, { "_id": 0, "name": 1, "alexa": 1})
```

### 根据指定条件查询

```python
my_query = { "name": "zhangsan"}
# 返回所有 name = zhangsan 的数据
list = sjs.find(my_query)
```

#### 查询条件可以是修饰符

```python
my_query = { "name": { "$gt": "H"} }
# 这表示读取所有的 name 的首字母的 ASCII 值大于 H 的数据。$gt 表示大于符
sjs.find(my_query)
```

#### 查询符号可以是正则

```python
my_query = { "name": { "$regex": "^R" } }
# 这表示查询所有的 name 的首字符为 R 的数据。$regex 表示使用正则
sjs.find(my_query)
```

### 返回指定条数数据

```python
# 表示查询集合中的3条记录，顺序返回。limit 只接受一个数字参数
sjs.find().limit(3)
```

## 修改数据

### 修改一条数据

```python
# 指定修改对应数据的条件
my_query = { "name": "zhangsan" }
# 指定要修改的数据
new_value = { "$set": { "sex": "male" } }

x = sjs.update_one(my_query, new_value)
```

### 修改所有匹配到的数据

```python
# 指定修改对应数据的条件
my_query = { "name": "zhangsan" }
# 指定要修改的数据
new_value = { "$set": { "sex": "male" } }

x = sjs.update_many(my_query, new_value)
```

## 删除数据

### 删除一条数据

```python
# 指定删除对应数据的条件
my_query = { "name": "zhangsan" }

x = sjs.delete_one(my_query)
```

### 删除多条数据

```python
# 指定删除对应数据的条件
my_query = { "name": "zhangsan" }
# 如果将查询条件置为空，则表示删除这个集合中的所有数据
# my_query = {}
x = sjs.delete_many(my_query)
```

### 删除集合

```python
# sjs 为一个集合，删除成功返回 True，失败返回 False
sjs.drop()
```

## 排序

`sotr()`方法可以指定数据升序或降序，它接收两个参数：

1. 第一个参数表示排序依据的字段
2. 第二个参数表示升序还是降序，默认升序

```python
# 表示将查询到的数据根据 id 排序，升序
x = sjs.find().sort("id")

# 这个表示降序
# x = sjs.find().sort("id", -1)
```

