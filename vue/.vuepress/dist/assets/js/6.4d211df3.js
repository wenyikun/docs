(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{355:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"composition-api（组合式-api）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api（组合式-api）"}},[t._v("#")]),t._v(" Composition API（组合式 API）")]),t._v(" "),a("p",[t._v("Composition API是Vue3中最具争议的一个更新，也是更新最大的地方。为什么选用Composition API？Vue官方介绍是：")]),t._v(" "),a("ol",[a("li",[t._v("更好的逻辑复用与代码组织")]),t._v(" "),a("li",[t._v("更好的类型推导")])]),t._v(" "),a("p",[t._v("虽然是新的东西，但也不太令人费解。只是Vue2中的Options API的另一种组织方式，如data、methods、computed、watch等，在Vue3都可以找到对应的函数。")]),t._v(" "),a("p",[a("code",[t._v("setup")]),t._v(" 函数是一个新的组件选项，作为在组件内使用 Composition API 的入口点。后面Vue其他选项的代码都可以包含在"),a("code",[t._v("setup")]),t._v("里面。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于Vue2中的Vue.observable()，下面state已经变成了响应式数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ref是新的东西，可以把单个值变成响应式数据，通过.value访问")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// computed理解起来就跟Vue2的一样")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plusOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部数据发生变化，函数就会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所以Composition API用起来并不难，只是要转变另一种方式。生命周期在内部也是有对应关系的，如下：")]),t._v(" "),a("ul",[a("li",[a("s",[a("code",[t._v("beforeCreate")])]),t._v(" -> 使用 "),a("code",[t._v("setup()")])]),t._v(" "),a("li",[a("s",[a("code",[t._v("created")])]),t._v(" -> 使用 "),a("code",[t._v("setup()")])]),t._v(" "),a("li",[a("code",[t._v("beforeMount")]),t._v(" -> "),a("code",[t._v("onBeforeMount")])]),t._v(" "),a("li",[a("code",[t._v("mounted")]),t._v(" -> "),a("code",[t._v("onMounted")])]),t._v(" "),a("li",[a("code",[t._v("beforeUpdate")]),t._v(" -> "),a("code",[t._v("onBeforeUpdate")])]),t._v(" "),a("li",[a("code",[t._v("updated")]),t._v(" -> "),a("code",[t._v("onUpdated")])]),t._v(" "),a("li",[a("code",[t._v("beforeDestroy")]),t._v(" -> "),a("code",[t._v("onBeforeUnmount")])]),t._v(" "),a("li",[a("code",[t._v("destroyed")]),t._v(" -> "),a("code",[t._v("onUnmounted")])]),t._v(" "),a("li",[a("code",[t._v("errorCaptured")]),t._v(" -> "),a("code",[t._v("onErrorCaptured")])])]),t._v(" "),a("p",[t._v("看起来Composition API并没有多大优势，反而把以前习惯的方式给颠覆了。那来看看官方说的两个优势体现在哪？")]),t._v(" "),a("ol",[a("li",[t._v("代码复用，"),a("code",[t._v("setup")]),t._v("完全就是一个JavaScript函数，如果我需要复用，那直接抽出来就可以了。可能有人会说"),a("code",[t._v("mixins")]),t._v("也可以，但是"),a("code",[t._v("mixins")]),t._v("是由弊端的，一个是暴露的 property 来源不清晰，一个是命名冲突。")]),t._v(" "),a("li",[t._v("TypeScript更好的支持，Vue2中Options API和TypeScript的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。Composition api全部采用普通函数，在编写代码时可以享受完整的类型推断。")])]),t._v(" "),a("p",[t._v("更多细节与需要注意的点还是要在项目中才能体会。")]),t._v(" "),a("h4",{attrs:{id:"参考资料："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料："}},[t._v("#")]),t._v(" 参考资料：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 组合式 API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);