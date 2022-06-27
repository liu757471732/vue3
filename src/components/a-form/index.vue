<template>
    <el-form ref="ruleFormRef" :model="form_data" :label-width="form_config.labelWidth" :size="form_config.formSize"
        :label-position="form_config.labelPosition" :status-icon="form_config.statusIcon">
        <template v-for="item in form_config.props" :key="item.prop">
            <el-form-item :label="item.label">
                <el-input v-model="form_data[item.prop]" :placeholder="item.message" />
            </el-form-item>
        </template>
        <el-form-item>
            <template v-for="el in form_config.btnList" :key="el.type">
                <el-button :type="el.color" @click="btnSubmit(el.type)">{{ el.label }}</el-button>
            </template>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { defineProps, ref } from 'vue'
// import { reactive } from 'vue'
const props = defineProps({
    form_data: {
        type: Object,
        default: () => { }
    },
    form_config: {
        type: Array,
        default: () => []
    },
    formSubmit: Function,
})

const ruleFormRef = ref(null)


const btnSubmit = (val) => {
    if (val == 'submit') {
        if (Object.prototype.toString.call(props.formSubmit) == '[object Function]' && props.formSubmit) {
            props.formSubmit(props.form_data)
        }
        console.log('执行提交事件')
    } else if (val == 'next') {
        console.log('执行下一步')
    } else if (val == 'clear') {
        ruleFormRef.value.resetFields()
        console.log('清空', ruleFormRef.value.resetFields)
    }
}


</script>
<style lang='scss' scoped>
</style>
