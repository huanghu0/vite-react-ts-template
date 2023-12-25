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
  },
  {
    path:'/phone',
    element:lazyLoad('phone/index'),
    children:[{
      path:'/phone/home',
      element:lazyLoad('phone/home/index')
    },{
      path:'/phone/page',
      element:lazyLoad('phone/page/index')      
    }
  ]
  }, 
]


export default routes

