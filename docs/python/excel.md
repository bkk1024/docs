# python 操作 excel

## 下载模块 xlwt

`pip install xlwt`

## 简单操作

```python
import xlwt
import os

xls = xlwt.Workbook()
sht1 = xls.add_sheet("表格名称")
# 按单元格写入数据
sht1.write(0, 0, "1")
sht1.write(0, 1, "2")
sht1.write(0, 2, "3")
sht1.write(0, 3, "4")
sht1.write(0, 4, "5")
# 保存文件
path = os.path.dirname(__file__) + "\\" + filename + ".xls"
xls.save(path)
```

