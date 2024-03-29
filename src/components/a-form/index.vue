<template>
  <el-form ref="ruleFormRef" :model="form_data" :label-width="form_config.labelWidth" :size="form_config.formSize"
    :label-position="form_config.labelPosition" :status-icon="form_config.statusIcon">
    <el-row>
      <el-col :span="item.col || 24" v-for="item in form_config.props">
        <!-- Input组件 -->
        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type === 'Input'" :key="item.prop"
          :rules="item.rules">
          <el-input v-model="form_data[item.prop]" :disabled="item.disabled" :placeholder="item.message"
            :clearable="item.clearable" :show-password="item.showPassword" :formatter="item.formatter"
            :parser="item.parser" :type="item.textarea ? 'textarea' : ''" :rows="item.rows || 2"
            :style="{ 'width': item.width }" />
        </el-form-item>
        <!-- select组件 -->
        <el-form-item :label="item.label" :prop="item.prop" v-else-if="item.type === 'Select'" :key="item.prop + 1"
          :rules="item.rules">
          <el-select v-model="form_data[item.prop]" :disabled="item.disabled" :clearable="item.clearable"
            :filterable="item.filterable" :multiple="item.multiple" :collapse-tags="item.collapseTags"
            :placeholder="item.message" :size="item.size" :style="{ 'width': item.width }">
            <el-option v-for="el in item.options" :key="el.value || el[item.aValue]"
              :label="el.label || el[item.aLabel]" :value="el.value || el[item.aValue]" :disabled="el.disabled">
              <div v-html="item.slotLabel && item.slotLabel(el)" v-if="item.slotLabel"></div>
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Cascader级联组件 -->
        <el-form-item :label="item.label" :prop="item.prop" v-else-if="item.type === 'Cascader'" :key="item.prop + 2"
          :rules="item.rules">
          <el-cascader v-model="form_data[item.prop]" :options="item.options" :props="item.props"
            :placeholder="item.message" :clearable="item.clearable" :show-all-levels="item.showAllLevels"
            :filterable="item.filterable" :style="{ 'width': item.width }" />
        </el-form-item>
        <!-- Checkbox多选框 -->
        <el-form-item :label="item.label" :prop="item.prop" v-else-if="item.type === 'Checkbox'" :key="item.prop + 3"
          :rules="item.rules">
          <el-checkbox-group v-model="form_data[item.prop]" :min="item.min" :max="item.max">
            <template v-if="!item.checkButton">
              <el-checkbox :label="el.label" :disabled="el.disabled" v-for="el in item.options" :border="item.border" />
            </template>
            <template v-else>
              <el-checkbox-button :label="el.label" :disabled="el.disabled" v-for="el in item.options" />
            </template>
          </el-checkbox-group>
        </el-form-item>
        <!-- 日期选择器 -->
        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type === 'Date'" :key="item.prop"
          :rules="item.rules">
          <el-config-provider :locale="local">
            <el-date-picker v-model="form_data[item.prop]" :type="item.state" :placeholder="item.message"
              :shortcuts="item.shortcuts" :disabled-date="item.disabledDate" :value-format="item.valueFormat" />
          </el-config-provider>
        </el-form-item>
        <!-- Number 数字输入框 -->
        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type === 'Radio'" :key="item.prop"
          :rules="item.rules">
          <el-radio-group v-model="form_data[item.prop]">
            <el-radio :label="el.value || el[item.aValue]" v-for="el in item.options" :key="el.value">{{ el.label ||
                el[item.aLabel]
            }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type === 'Upload'" :key="item.prop"
          :rules="item.rules">
          <el-upload class="upload-demo" :list-type="item.listType" :limit="item.limit || 1"
            :http-request="handleUpload(item.prop)" :on-remove="handleRemove(item.prop)"
            :on-preview="handlePictureCardPreview" :accept="item.accept" :before-upload="beforeAvatarUpload">
            <el-button class="ml-3" type="primary" v-if="item.state=='button'">上传</el-button>
            <template v-else>
              <el-icon>
                <Plus />
              </el-icon>
            </template>
            <template #tip>
              <div class="el-upload__tip">
                {{item.hint}}
              </div>
            </template>
          </el-upload>

        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <template v-for="el in form_config.btnList" :key="el.type">
        <el-button :type="el.color" @click="btnSubmit(el.type)">{{ el.label }}</el-button>
      </template>
    </el-form-item>
    <el-dialog v-model="dialogVisible" center>
      <img :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </el-form>
</template>
<script setup>
import client from '@/utils/oss'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import zhcn from 'element-plus/lib/locale/lang/zh-cn'
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
const local = ref(zhcn)
const dialogImageUrl = ref('')
const dialogVisible = ref(false)


const btnSubmit = (val) => {
  ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
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
      }
    } else {
      console.log('error submit!', fields)
    }
    if (val == 'clear') {
      ruleFormRef.value.resetFields()
    }
  })

}

const handleUpload = (val) => {
  return (file) => {
    const tmpcnt = file.file.name.lastIndexOf(".")
    const exname = file.file.name.substring(tmpcnt + 1)
    const names = ['jpg', 'jpeg', 'webp', 'png', 'bmp']
    if (names.indexOf(exname) < 0) {
      this.$message.error("不支持的格式!")
      return
    }
    const fileName = '/packaging/' + file.file.name
    client.put(fileName, file.file).then(res => {
      if (res.url) {
        props.form_data[val].push(res.url)
      } else {
        this.$message.error('文件上传失败')
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

const handleRemove = (val) => {
  return (file) => {
    client.delete('/packaging/' + file.name).then((res) => {
      let { res: { requestUrls: requestUrls } } = res
      requestUrls.forEach(el => {
        props.form_data[val] = props.form_data[val].filter((i) => {
          return i != el
        })
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}

const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}


const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('大小不能超过2MB!')
    return false
  } else {
    return true
  }
}

</script>
<style lang='scss' scoped>
.upload-demo {
  width: 100%;
}

::v-deep .el-upload--picture-card {
  --el-upload-picture-card-size: 120px
}

::v-deep .el-upload-list--picture-card .el-upload-list__item {
  width: 120px !important;
  height: 120px !important;
}

::v-deep .el-dialog__body {
  overflow: auto;
}
</style>
