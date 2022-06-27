<template>
  <el-form ref="ruleFormRef" :model="form_data" :label-width="form_config.labelWidth" :size="form_config.formSize"
    :label-position="form_config.labelPosition" :status-icon="form_config.statusIcon">
    <template v-for="item in form_config.props" :key="item.prop">
      <!-- Input组件 -->
      <el-form-item :label="item.label" :prop="item.prop" v-if="item.type === 'Input'">
        <el-input v-model="form_data[item.prop]" :disabled="item.disabled" :placeholder="item.message"
          :clearable="item.clearable" :show-password="item.showPassword" :formatter="item.formatter"
          :parser="item.parser" :type="item.textarea ? 'textarea' : ''" :rows="item.rows || 2" />
      </el-form-item>
      <!-- select组件 -->
      <el-form-item :label="item.label" :prop="item.prop" v-else-if="item.type === 'Select'">
        <el-select v-model="form_data[item.prop]" :disabled="item.disabled" :clearable="item.clearable"
          :filterable="item.filterable" :multiple="item.multiple" :collapse-tags="item.collapseTags"
          :placeholder="item.message" size="large">
          <el-option v-for="el in item.options" :key="el.value || el[item.aValue]" :label="el.label || el[item.aLabel]"
            :value="el.value || el[item.aValue]" :disabled="el.disabled">
            <div v-html="item.slotLabel && item.slotLabel(el)" v-if="item.slotLabel"></div>
          </el-option>
        </el-select>
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
    type: Object,
    default: () => { }
  },
  formSubmit: Function,  //让页面去调用提交表单
  formNext: Function,   //让页面去调用下一步
})

const ruleFormRef = ref(null)


const btnSubmit = (val) => {
  if (val == 'submit') {
    if (Object.prototype.toString.call(props.formSubmit) == '[object Function]' && props.formSubmit) {
      props.formSubmit(props.form_data)
    }
    console.log('执行提交事件')
  } else if (val == 'next') {
    if (Object.prototype.toString.call(props.formNext) == '[object Function]' && props.formNext) {
      props.formNext(props.form_data)
    }
    console.log('执行下一步')
  } else if (val == 'clear') {
    console.log(ruleFormRef.value.resetFields)
    ruleFormRef.value.resetFields()
  }
}


</script>
<style lang='scss' scoped>
</style>
