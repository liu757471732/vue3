<template>
  <AForm :form_data="data.form_data" :form_config="data.form_config" :formSubmit="formSubmit" :formNext="formNext">
  </AForm>
</template>
<script setup>
import AForm from '@/components/a-form'
import { reactive } from 'vue'
const data = reactive({
  form_data: {
    name: ''
  },
  form_config: {
    // 是否使用icon图片 默认叉叉
    statusIcon: true,
    labelWidth: '120px',
    // plus新增属性form表单的大小控制  'large' | 'default' | 'small'
    formSize: 'default',
    // 名称的位置 'left' | 'right' | 'top'
    labelPosition: 'right',
    // form列表的配置
    props: [
      // input组件的配置
      {
        type: 'Input',
        prop: 'name',
        label: '姓名',
        // rows: 4, //文本域的行数
        // textarea: true, //是否使用文本域  
        // disabled: false,   //是否禁用输入框
        // clearable: true,  //是否允许清空
        // showPassword: false,  //是否允许清空
        message: '请输入名称',
        // plus  新增 过滤数据
        // formatter: (value) => {
        //   return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        // },
        // parser: (value) => {
        //   return value.replace(/\$\s?|(,*)/g, '')
        // }

      },
      // select组件的配置
      {
        type: 'Select',
        prop: 'school',
        label: '学校',
        aValue: 'id',
        aLabel: 'title',
        // filterable:true, //下拉框的筛选
        // disabled: false, //  禁用下拉框
        // clearable: true, //清空选项
        // multiple: true,  //  下拉框的多选
        // collapseTags: true, //  下拉框的多选配合使用
        // slotLabel: (value) => {   //插槽的使用方法
        //   return `<div>
        //   <span style="float: left"> 
        //     ${value.title} 
        //   </span>
        //   <span style="float: right; color: var(--el-text-color-secondary);
        //   font-size: 13px;"> 
        //     ${value.english} </span>
        //   </div>`
        // },
        options: [
          {
            id: '0',
            title: '清华大学',
            english: 'QHDX'
            // disabled: true, 是否禁用该选项
          },
          {
            id: '1',
            title: '北京大学',
            english: 'BQDX'
          }
        ],
        message: '请输入名称'
      },
    ],
    btnList: [
      // 利用
      {
        type: 'submit',
        color: 'primary',  //按钮的颜色
        label: '提交',
      },
      {
        type: 'next',
        color: '',  //为空的话就是默认没有颜色
        label: '下一步',
      },
      {
        type: 'clear',
        color: '',  //为空的话就是默认没有颜色
        label: '清空',
      }
    ]
  }
})
// 传递过去的方法最后form表单提交
const formSubmit = (val) => {
  console.log(val, '发送请求')
}

const formNext = (val) => {
  console.log(val, '下一步')
}

</script>
<style lang='scss' scoped>
</style>
