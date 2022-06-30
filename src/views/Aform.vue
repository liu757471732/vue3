<template>
  <AForm :form_data="data.form_data" :form_config="data.form_config" :formSubmit="formSubmit" :formNext="formNext">
  </AForm>
</template>
<script setup>
import AForm from '@/components/a-form'
import { reactive } from 'vue'

const data = reactive({
  form_data: {
    name: '',
    school: '',
    address: '',
    fruits: [],
    time: '',
    trip: 0,
    url: [],
    urlText: []
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
        // col: 6,  //占多少行
        // width: '300px',
        rules: [
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur',
          }
        ]
        // plus  新增 过滤数据
        // formatter: (value) => {
        //   return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        // },
        // parser: (value) => {
        //   return value.replace(/\$\s?|(,*)/g, '')
        // }

      },
      // select组件的配置   远程搜索并未封装
      {
        type: 'Select',
        // size: 'large',
        prop: 'school',
        label: '学校',
        aValue: 'id',
        aLabel: 'title',
        // filterable: true, //下拉框的筛选可以输入的形势
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
        rules: [
          {
            required: true,
            message: '请选择学校',
            trigger: 'change',
          }
        ],
        // width: '300px',
        // col: 6,  //占多少行
        // message: '请选择学校'
      },
      {
        type: 'Cascader',
        prop: 'address',
        label: '地区',
        // 级联选择器的属性配置
        props: {
          // expandTrigger: 'hover',   //选择项的方式
          // multiple: true,  //是否多选
          // checkStrictly: true,  //选择级联的任意一项
        },
        filterable: true,
        // showAllLevels: false, //仅显示最后一项
        // clearable:true,  //可清空该选项
        options: [
          {
            value: '0',
            label: '湖北',
            children: [
              {
                value: '1',
                label: '武汉',
                children: [
                  {
                    value: '2',
                    label: '江岸区',
                    // disabled: true,   //disabled 会自动禁用这一行选项
                  },
                  {
                    value: '3',
                    label: '江汉区',
                  },
                  {
                    value: '4',
                    label: '汉阳区',
                  },
                  {
                    value: '5',
                    label: '武昌区',
                  },
                ],
              },
              {
                value: '6',
                label: '黄石',
                children: [
                  {
                    value: '7',
                    label: '黄石港区',
                  },
                  {
                    value: '8',
                    label: '下陆区',
                  },
                ],
              },
            ],
          }
        ],
        rules: [
          {
            required: true,
            message: '请选择地区',
            trigger: 'change',
          }
        ],
        // width: '300px',
        // col: 6,  //占多少行
        message: '请选择地区',
      },
      // Checkbox多选框
      {
        type: 'Checkbox',
        prop: 'fruits',
        label: '水果',
        // border:true, //border带边框的勾选框 
        // checkButton: true, //是否显示but按钮
        // min: 1,   //最少勾选
        // max: 2,  //最大勾选
        options: [
          {
            label: '苹果',
            // disabled: true,  //是否禁用当前选项
          },
          {
            label: '菠萝'
          },
          {
            label: '葡萄'
          }
        ],
        rules: [
          {
            required: true,
            message: '请勾选水果',
            trigger: 'change',
          }
        ],
        // col: 6,  //占多少行
      },
      // 日期时间选择器
      {
        type: 'Date',
        prop: 'time',
        state: 'date',  //使用什么时间控件
        label: '日期',
        valueFormat: "YYYY-MM-DD",
        // 禁止选用的时间
        // disabledDate: (time) => {
        //   return time.getTime() < Date.now() - 3600 * 1000 * 24
        // },
        // shortcuts: [
        //   {
        //     text: '今天',
        //     value: new Date(),
        //   },
        //   {
        //     text: '昨天',
        //     value: () => {
        //       const date = new Date()
        //       date.setTime(date.getTime() - 3600 * 1000 * 24)
        //       return date
        //     },
        //   },
        //   {
        //     text: '一周前',
        //     value: () => {
        //       const date = new Date()
        //       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        //       return date
        //     },
        //   },
        // ],
        rules: [
          {
            required: true,
            message: '请选择日期',
            trigger: 'blu',
          }
        ],
        // col: 6,  //占多少行
        message: '请选择日期',
      },
      {
        type: 'Radio',
        prop: 'trip',
        label: '出行方式',
        aValue: 'id',
        aLabel: 'title',
        options: [
          { id: 0, title: '汽车' },
          { id: 1, title: '自行车' },
          { id: 2, title: '步行' }
        ],
        // col: 6,  //占多少行
      },
      {
        type: 'Upload',
        prop: 'url',
        state: 'button', //上传分为图片上传和文件上传 button 文件上传 card  图片上传
        label: '上传',
        limit: 6, //最多上传多少张图片
        // listType: 'picture-card',
        // col: 6,  //占多少行
        rules: [
          {
            required: true,
            message: '请输上传文件',
            trigger: 'blur',
          }
        ]
      },
      {
        type: 'Upload',
        prop: 'urlText',
        state: 'card', //上传分为图片上传和文件上传 button 文件上传 card  图片上传
        label: '上传',
        listType: 'picture-card',
        limit: 6, //最多上传多少张图片
        // col: 6,  //占多少行
        hint: '最多上传6张图片并且不超过2M',  //提示文字
        // accept: ['.jpg', '.png'],  //只上传什么类型的文件
        rules: [
          {
            required: true,
            message: '请输上传文件',
            trigger: 'blur',
          }
        ]
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
