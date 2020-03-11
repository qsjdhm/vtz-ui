// 导入组件
import TagsView3 from './src/TagsView3.vue'
import './font.scss'

// 为组件提供 install 安装方法，供按需引入
TagsView3.install = function (Vue) {
  Vue.component(TagsView2.name, TagsView2)
}

// 默认导出组件
export default TagsView3
