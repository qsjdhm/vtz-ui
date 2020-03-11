// 导入组件
import dzb from './src/dzb.vue'
import './font.scss'

// 为组件提供 install 安装方法，供按需引入
dzb.install = function (Vue) {
  Vue.component(dzb.name, TagsView2)
}

// 默认导出组件
export default dzb
