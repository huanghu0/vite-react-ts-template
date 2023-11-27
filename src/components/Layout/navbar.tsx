import React,{  memo, useCallback, useEffect, useMemo, useState } from "react";
import type { MenuProps } from 'antd';
import { navBarProps } from "@/interface/index"
import { Menu } from 'antd';
import { useAppSelector } from '@/hooks/storehooks';
import { useNavigate,useLocation } from "react-router-dom";
import CustomIcon from "../Icon";


export default memo(() => {
  const { navBarList } = useAppSelector((state) => state.routerStore)
  const location = useLocation();
  const [currentMode,setCurrentMode] = useState<string>('')
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentMode(() => '/' + location.pathname?.split('/')?.[1] || '/home')
  },[location])


  const items:MenuProps['items'] = useMemo(() => {
    const items:MenuProps['items'] = navBarList.map((item:navBarProps) => {
      return {
        ...item,
        icon:<CustomIcon name={item.icon || 'Home'} style={{ fontSize: '14px' }}></CustomIcon>
      }
    })
    return items ?? []
  },[navBarList])

  const handleModeClick = useCallback((e:any) => {
    // setCurrentMode(e.key)
    navigate(e.key)
  },[])

  return (
    <div className="navbar">
      <Menu 
        onClick={handleModeClick} 
        selectedKeys={[currentMode]} 
        mode="horizontal" 
        items={items} 
      />
    </div>
  )
}) 