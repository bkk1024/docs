# Element-UI

## 1、使用穿梭组件，数据量大时导致卡顿

穿梭组件：`transfer`

![image-20230506190158702](./elementui.assets/image-20230506190158702.png)

当数据量大时，渲染起来会卡顿，所以懒加载和分页是基本操作。

但是做了懒加载或分页操作后，用户点击依然会卡顿，这是因为 transfer 的源码中*全选*判断代码性能差的原因，因此**方案一就是修改源码**。

具体可看这篇博客：[关于Element-UI的穿梭框数据量大时，点击‘全选’卡顿的解决方案 - 绵雨唤 - 博客园 (cnblogs.com)](https://www.cnblogs.com/raintoway/p/13469997.html) 