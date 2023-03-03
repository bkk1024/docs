// 自定义指令，input 的第一个英文字母转变为大写

import { Directive } from "vue"

export const vUpper: Directive = {
	mounted: (el, binding, vNode, prevNode) => {
		let value = vNode.target?.value
		value = value?.charAt(0).toUpperCase() + value?.slice(1)
	},
}
