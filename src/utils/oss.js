import OSS from 'ali-oss'
const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI5tD3GQc5LCqF5hMVqD5T',
  accessKeySecret: '8SDWtoIDhFb2hFfSxFnWNbZ4C4a0yX',
  bucket: 'packaging-pload'
})
export default client