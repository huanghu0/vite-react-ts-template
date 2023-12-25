import React,{ useState,useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import {
  useNavigate,
  useLocation 
} from "react-router-dom";
import { BottomTabBar } from '@/interface';


const BottomBar: React.FC = (props:any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [tabs,setTabs] = useState<BottomTabBar[]>([])
  const { pathname } = location

  useEffect(() => {
    setTabs(props.tabs)
  },[])

  const setRouteActive = (value: string) => {
    navigate(value)
  }


  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default BottomBar