// 自定义自定聚焦指令

import { Directive } from "vue"

export const vFocus: Directive = {
	mounted: (el) => {
		el.focus()
	},
}
