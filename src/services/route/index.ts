import { fetchGet } from '../index'
export const getRoutes = (params = {}) => fetchGet('/getRouters',params)