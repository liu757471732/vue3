<template>
    <!-- 在不使用component组件的is属性去封装table -->
    <el-table :data="props.tableData" style="width: 100%" :stripe="stripe" :border="border" :height="height"
        @selection-change="handleSelectionChange" :span-method="spanMethod">
        <el-table-column type="selection" width="55" v-if="props.isSelection" />
        <template v-for="item in props.tableLable" :key="item.prop">
            <!-- 插槽 -->
            <el-table-column :prop="item.prop" :label="item.lable" :fixed="item.fixed" :width="item.width"
                :sortable="item.sortable" v-if="item.type == 'slot'">
                <template #default="scope">
                    <slot :name="item.slotName" :data="scope.row"></slot>
                </template>
            </el-table-column>
            <!-- 显示图片 -->
            <el-table-column :prop="item.prop" :label="item.lable" :fixed="item.fixed" :width="item.width"
                :sortable="item.sortable" v-else-if="item.type == 'image'">
                <template #default="scope">
                    <el-image style="width: 50px; height: 50px" fit="cover" :src="scope.row[item.prop][0]"
                        :preview-src-list="scope.row[item.prop]" preview-teleported="true" />
                </template>
            </el-table-column>
            <!-- tag -->
            <el-table-column :prop="item.prop" :label="item.lable" :fixed="item.fixed" :width="item.width"
                :sortable="item.sortable" v-else-if="item.type == 'tag'">
                <template #default="scope">
                    <el-tag :type="item.tagType[scope.row[item.prop]]">
                        <span v-html="item.callBack && item.callBack(scope.row)" v-if="item.callBack"></span>
                        <span v-else>{{ scope.row[item.prop] }}</span>
                    </el-tag>
                </template>
            </el-table-column>
            <!-- function 需要过滤的数据 -->
            <el-table-column :prop="item.prop" :label="item.lable" :fixed="item.fixed" :width="item.width"
                :sortable="item.sortable" v-else-if="item.type == 'function'">
                <template #default="scope">
                    <div v-html="item.callBack && item.callBack(scope.row)"></div>
                </template>
            </el-table-column>
            <!-- 其他 -->
            <el-table-column :prop="item.prop" :label="item.lable" :fixed="item.fixed" :width="item.width"
                :show-overflow-tooltip='true' :sortable="item.sortable" v-else />
        </template>
    </el-table>
</template>
<script setup>
import { reactive, defineProps, defineEmits, watch } from 'vue'
const props = defineProps({
    // table的data数据
    tableData: {
        type: Array,
        default: () => []
    },
    // table的表头
    tableLable: {
        type: Array,
        default: () => []
    },
    // 合并的行
    columnList: {
        type: Array,
        default: () => []
    },
    border: Boolean, //是否显示表格边框
    stripe: Boolean,  //是否显示表格斑马线
    merge: Boolean,  //是否使用合并
    height: Number, //设置表格的高度
    isSelection: Boolean, //是否显示勾选框
})
//子组件触发父组件的方法
const emit = defineEmits()


const data = reactive({
    json: {}
})

watch(() => props.tableData, (oldVal) => {
    let json = {}
    let num = 0
    oldVal.forEach((el, index) => {
        if (index && el.id == oldVal[index - 1].id) {
            json[num] += 1
        } else {
            num = index
            json[num] = 1
        }
    })
    data.json = json
}, { immediate: true })

const spanMethod = ({ rowIndex, columnIndex }) => {
    if (props.merge) {
        let keys = Object.keys(data.json)
        if (props.columnList.includes(columnIndex)) {
            if (keys.includes(rowIndex.toString())) {
                return {
                    rowspan: data.json[rowIndex],
                    colspan: 1,
                }
            } else {
                return {
                    rowspan: 0,
                    colspan: 0,
                }
            }
        }
    } else {
        return
    }
}


// 表格勾选框勾选事件
const handleSelectionChange = (val) => {
    emit('handleSelection', val)
}

</script>
<style lang='scss' scoped>
</style>
