# react 使用 lottie

## 安装依赖

`npm i lottie-react`

## 使用

```jsx
import React from "react"
import Lottie from "lottie-react"
// lottie 动画 json 文件
import DecorationJSON from "../assets/lottie/decoration.json"

const DecorateLottie = () => {、
	return (
		<div className="bg-white flex justify-center mb-4">
			<Lottie animationData={DecorationJSON} />
		</div>
	)
}

export default DecorateLottie
```

