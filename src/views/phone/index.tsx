import React from 'react'
import BottomBar from '@/components/BottomTabBar'
import {
  AppOutline,
  UserOutline,
} from 'antd-mobile-icons'

import {
  Outlet
} from 'react-router-dom'


const tabs = [
  {
    key: '/phone/home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/phone/page',
    title: '我的',
    icon: <UserOutline />,
  },
]

export default React.memo(() => {

  return (
    <div className='phone'>
      <div className='body'>
        <Outlet></Outlet>
      </div>
      <div className='bottom'>
        <BottomBar tabs={tabs} ></BottomBar>
      </div>
    </div>
  )
})