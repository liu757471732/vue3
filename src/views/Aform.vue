<template>
    <AForm :form_data="data.form_data" :form_config="data.form_config" :formSubmit="formSubmit"></AForm>
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
            {
                type: 'Input',
                prop: 'name',
                label: '姓名',
                message: '请输入名称'
            }
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

</script>
<style lang='scss' scoped>
</style>
