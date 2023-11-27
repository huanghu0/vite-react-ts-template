import { lazy,Suspense } from "react";
import { RouteObject  } from 'react-router-dom'
import _ from "lodash"
import ParentView from "@/components/ParentView";
import Layout from "@/components/Layout";
import { RouterProps,MenuItem } from "@/interface/index"
import CustomIcon from "@/components/Icon";
const pages = {
  ...import.meta.glob(`@/views/*.tsx`),
  ...import.meta.glob(`@/views/*/*.tsx`),
  ...import.meta.glob(`@/views/*/*/*.tsx`)
}

// 动态加载组件
export const lazyLoad = (moduleName:string) => {
  if(!pages[`/src/views/${moduleName}.tsx`] as any){
    return null
  }
  const Module = lazy(pages[`/src/views/${moduleName}.tsx`] as any)
  return <Suspense><Module /></Suspense>;
};

// 动态路由数组生成
export const rewriteRoutes = (routes:RouterProps[]) => {
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
  return reRoutes
}

// 添加fullpath
export const rewriteRoutesFullPath = (routes:RouterProps[]) => {
  const reRoutes:RouterProps[] = _.cloneDeep(routes)
  const dfs = (reRoutes:any,parentRoute?:RouterProps) => {
    if(!reRoutes || !reRoutes.length) return
    for(let i = 0;i < reRoutes.length;i++){
      if(parentRoute){
        reRoutes[i].fullpath = parentRoute.fullpath + '/' + reRoutes[i].path
      }else{
        reRoutes[i].fullpath = reRoutes[i].path
      }
      if(reRoutes[i].children && reRoutes?.[i]?.children.length){
        dfs(reRoutes[i]?.children,reRoutes[i])
      }
    }
  }
  dfs(reRoutes)
  return reRoutes
}

// 处理侧边菜单
export const rewriteSideMenuItems = (routes:RouterProps[]) => {
  const reRoutes:MenuItem[] = []
  const dfs = (routes:any,reRoutes:RouteObject[]) => {
    if(!routes || !routes.length) return
    for(let i = 0;i < routes.length;i++){
      let obj:any = { }
      obj.key = routes[i].fullpath
      obj.label = routes[i].meta.title
      obj.icon = (<CustomIcon name={routes[i].meta.icon} style={{ fontSize:'14px' }}></CustomIcon>)
      let children:MenuItem[] = []
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
  return reRoutes  
}