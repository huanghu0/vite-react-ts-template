import React,{ useCallback, useEffect, useMemo, useState } from "react";
import { useAppSelector } from '@/hooks/storehooks';
import { useNavigate,useLocation } from "react-router-dom";
import type { MenuProps } from 'antd';
import { RouterProps } from "@/interface/index";
import { Menu } from 'antd';
import { rewriteSideMenuItems } from "@/utils/index";
export default React.memo(() => {
  const { routeList } = useAppSelector((state) => state.routerStore)
  const navigate = useNavigate()
  const location = useLocation();
  const [modeUrl,setModeUrl] = useState<string>('/' + (location.pathname?.split('/')?.[1] ?? ''))

  useEffect(() => {
    setModeUrl(() => '/' + (location.pathname?.split('/')?.[1] ?? ''))
  },[location])

  const items:MenuProps['items'] = useMemo(() => {
    let items:MenuProps['items'] = []
    let route:RouterProps | undefined | null = routeList.find((item:RouterProps) => item.path === modeUrl)
    if(route && route.children && route.children.length){
      items = rewriteSideMenuItems(route.children) // 处理嵌套的菜单
    }
    return items
  },[routeList,modeUrl])

  const handleClick = useCallback((e:any) => {
    navigate(e.key)
  },[])

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src="src/assets/img/logo.png" alt="logo" className="sidebar-logo" />
        <h1 className="sidebar-title">react 管理后台</h1>
      </div>
      <div className="sidebar-menu">
        <Menu
          mode="inline"
          theme="dark"
          items={items}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}) 