// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import akButton from './Button'
import akDialog from './Dialog'
import akInput from './Input'
import akCheckbox from './CheckBox'
import akRadio from './Radio'
import akRadioGroup from './RadioGroup'
import akSwitch from './Switch'
import akCheckboxGroup from './CheckBoxGroup'
import akForm from './Form'
import akFormItem from './FormItem'
import './fonts/iconfont.css'

const components = [
  akButton,
  akDialog,
  akInput,
  akCheckbox,
  akRadio,
  akRadioGroup,
  akSwitch,
  akCheckboxGroup,
  akForm,
  akFormItem
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}
