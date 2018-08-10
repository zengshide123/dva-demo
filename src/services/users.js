import request from '../utils/request';


export function users({page = 1 }) {
  console.log(page)
  return request(`/api/users?_page=${page}&_limit=10`)
}
