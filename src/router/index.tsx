import { Navigate,RouteObject  } from 'react-router-dom'
import { lazyLoad } from '../utils'

const routes:RouteObject[] = [
  {
    path:'/',
    element: <Navigate to="/home" />
  },
  {
    path:'/404',
    element:lazyLoad('error/404')
  } 
]


export default routes

