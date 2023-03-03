// 自定义拖拽指令

import { Directive } from "vue"

export const vMove: Directive = {
	mounted(el: HTMLElement) {
		// 这里遵循`子绝父相`的原则
		// 这里如果写作 el.parentElement?.style.position = 'relative' 会报错：赋值表达式的左侧不能是可选属性访问。
		el.parentElement?.setAttribute("style", "position: relative")
		el.style.position = "absolute"

		const mouseDown = (e: MouseEvent) => {
			//鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
			console.log(e.clientX, e.clientY, "-----起始", el.offsetLeft)
			let X = e.clientX - el.offsetLeft
			let Y = e.clientY - el.offsetTop
			const move = (e: MouseEvent) => {
				el.style.left = e.clientX - X + "px"
				el.style.top = e.clientY - Y + "px"
				console.log(e.clientX, e.clientY, "---改变")
			}
			document.addEventListener("mousemove", move)
			document.addEventListener("mouseup", () => {
				document.removeEventListener("mousemove", move)
			})
		}
		el.addEventListener("mousedown", mouseDown)
	},
}
