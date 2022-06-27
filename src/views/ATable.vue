<template>
  <div>
    <ATable :tableData="tableData" :tableLable="tableLable" stripe border @handleSelection="handleSelection">
      <template v-slot:slot_operation="data">
        <el-button size="default">编辑</el-button>
      </template>
    </ATable>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import ATable from '@/components/a-table'
// stripe  //是否显示表格斑马线
//  border  //是否显示表格边框
// const height = ref(250)  //是否显示表格边框
// merge是否使用合并
// columnList=[1,2]  合并的行
// isSelection 
const tableData = reactive([
  {
    id: '12987122',
    date: '2016-05-01',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    ],
    name: 'Tom',
    state: '0',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: '12987122',
    date: '2016-05-02',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    ],
    name: 'Tom',
    state: '1',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: '12987123',
    date: '2016-05-03',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    ],
    name: 'Tom',
    state: '2',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: '12987123',
    date: '2016-05-04',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    ],
    name: 'Tom',
    state: '0',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: '12987123',
    date: '2016-05-04',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    ],
    name: 'Tom',
    state: '0',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    id: '12987123',
    date: '2016-05-04',
    srcList: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    ],
    name: 'Tom',
    state: '0',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  }
])
const tableLable = reactive([
  {
    lable: 'id',
    prop: 'id',
    // fixed: 'left',  //固定某一行
    // width: '200px',  //设置表格数据的宽度
  },
  {
    lable: '日期',
    prop: 'date',
    // fixed: 'left',  //固定某一行
    // width: '200px',  //设置表格数据的宽度
  },
  {
    lable: '图片',
    prop: 'srcList',
    type: 'image',
    maxImage: 5,  //弹出框最多显示多少张图片
    // width: '300px',
  },
  {
    lable: '名称',
    prop: 'name',
    // width: '300px',
  },
  {
    lable: '状态',
    prop: 'state',
    type: 'tag',
    tagType: {
      '0': '',
      '1': 'success',
      '2': 'info',
      '3': 'warning',
      '4': 'danger'
    },
    callBack: (val) => {
      if (val.state == 0) {
        return '待发货'
      } else if (val.state == 1) {
        return '待收货'
      } else if (val.state == 2) {
        return '确认收货'
      } else if (val.state == 3) {
        return '退款'
      }
    }
    // width: '300px',
  },
  {
    lable: '城市',
    prop: 'city',
    // width: '300px',
  },
  {
    lable: '地址',
    prop: 'address',
    // width: '300px',
  },
  {
    lable: '地址',
    prop: 'zip',
    // width: '300px',
  },
  {
    lable: '提示',
    prop: 'tag',
    // fixed: 'right',
  },
  {
    lable: '操作',
    prop: 'operation',
    type: 'slot',
    slotName: 'slot_operation'
    // fixed: 'right',
  },
])

// 表格勾选 触发父组件的方法传递过来的数据
const handleSelection = (val) => {
  console.log(val)
}

</script>
<style lang='scss' scoped>
</style>
