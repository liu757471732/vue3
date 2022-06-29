import request from '@/utils/request'

// 锚点列表
export function anchoirLists() {
  return request({
    url: '/register',
    method: 'POST'
  })
}