import { request } from 'umi';

export const getRemoteList = async params => {

  return request('/api/list', { //配置代理  接口原地址http://localhost:3001/list 
    method: 'get',
    // params: { id: 1},
  })
  .then(function(response) {
    console.log(response);
    return response;
  })
  .catch(function(error) {
    console.log(error)
  })
}