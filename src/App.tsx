import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom';
import { useAppSelector } from '@/hooks/storehooks';
import routes from '@/router/index';
import { rewriteRoutes } from '@/utils/index'

const App:React.FC = () =>{
  const { routeList } = useAppSelector((state) => state.routerStore)
  const [addRoutes,setAddRoutes] = useState<any>([])

  useEffect(() => {
    setAddRoutes(() => rewriteRoutes(routeList)) 
  },[routeList])

  const element = useRoutes([...routes,...addRoutes])
  return (
    <>
    { element }
    </>
  )
}

export default App
