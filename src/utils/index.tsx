import { lazy,Suspense } from "react";
import { RouteObject  } from 'react-router-dom'
import _ from "lodash"
import ParentView from "@/components/ParentView";
import Layout from "@/components/Layout";
const pages = {
  ...import.meta.glob(`@/views/*.tsx`),
  ...import.meta.glob(`@/views/*/*.tsx`),
  ...import.meta.glob(`@/views/*/*/*.tsx`)
}

export const lazyLoad = (moduleName:string) => {
  if(!pages[`/src/views/${moduleName}.tsx`] as any){
    return null
  }
  const Module = lazy(pages[`/src/views/${moduleName}.tsx`] as any)
  return <Suspense><Module /></Suspense>;
};

export const rewriteRoutes = (routes:any) => {
  // const reRoutes:RouteObject[] = []
  // const dfs = (route:any,routeObj:any) => { 
  //   if(!route) return
  //   routeObj.path = route.path
  //   if(route.component === 'ParentView'){
  //     routeObj.element = (<ParentView />)
  //   }else if(route.component === 'Layout'){
  //     routeObj.element = (<Layout />)
  //   }else{
  //     routeObj.element = lazyLoad(route.component)
  //   }
  //   let children:RouteObject[] = []
  //   if(route.children && route.children.length !== 0){
  //     for(let i = 0;i < route.children.length;i++){
  //       let obj:RouteObject = {}
  //       dfs(route.children[i],obj)
  //       children.push(obj)
  //     }
  //   }
  //   if(children.length !== 0){
  //     routeObj.children = children
  //   }
  // }
  // for(let i = 0;i < routes.length;i++){
  //   let routeObj:RouteObject = {}
  //   dfs(routes[i],routeObj)
  //   reRoutes.push(routeObj)
  // }


  const reRoutes:RouteObject[] = []
  const dfs = (routes:any,reRoutes:RouteObject[]) => {
    if(!routes || !routes.length) return
    for(let i = 0;i < routes.length;i++){
      let obj:RouteObject = {}
      if(routes[i].component === 'ParentView'){
        obj.element = (<ParentView />)
      }else if(routes[i].component === 'Layout'){
        obj.element = (<Layout />)
      }else{
        obj.element = (lazyLoad(routes[i].component))
      }
      obj.path = routes[i].path
      let children:RouteObject[] = []
      if(routes[i].children && routes[i].children.length){
        dfs(routes[i].children,children)
      }
      if(children.length !== 0){
        obj.children = children
      }  
      reRoutes.push(obj)    
    }    
  }

  dfs(routes,reRoutes)

  
  // const reRoutes:any = _.cloneDeep(routes)
  // const dfs = (reRoutes:any,parentRoute?:any) => {
  //   if(!reRoutes || !reRoutes.length) return
  //   for(let i = 0;i < reRoutes.length;i++){
  //     if(reRoutes[i].component === 'ParentView'){
  //       reRoutes[i].element = (<ParentView />)
  //     }else if(reRoutes[i].component === 'Layout'){
  //       reRoutes[i].element = (<Layout />)
  //     }else{
  //       reRoutes[i].element = (lazyLoad(reRoutes[i].component))
  //     }
  //     if(parentRoute){
  //       reRoutes[i].fullPath = parentRoute.fullPath + '/' + reRoutes[i].path
  //     }else{
  //       reRoutes[i].fullPath = reRoutes[i].path
  //     }
  //     if(reRoutes[i].children && reRoutes[i].children.length){
  //       dfs(reRoutes[i].children,reRoutes[i])
  //     }
  //   }
  // }
  // dfs(reRoutes)
  // console.log(reRoutes,'reRoutes')
  
  return reRoutes
}