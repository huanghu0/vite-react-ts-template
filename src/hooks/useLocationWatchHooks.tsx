import React, { createContext, useContext, useEffect, useRef,useCallback } from "react";
import { Location, useLocation } from "react-router-dom";
import { useAppDispatch,useAppSelector } from '@/hooks/storehooks';
import { getRoutes } from '@/services/route/index';
import { setRouteList,setNavBarList } from '@/store/routerStore/routerSlice';
import { rewriteRoutesFullPath } from "@/utils/index";
import { RouterProps,navBarProps } from "@/interface/index";


type LocationTrans = {
    from: Location;
    to: Location;
};

const setMenuItemList  = (routes:RouterProps[]):navBarProps[] => {
  let menuItems:navBarProps[] = []
  routes.forEach((item:RouterProps) => {
    menuItems?.push({
      label:item.meta?.title || '',
      key:item.path,
      icon: item.meta?.icon || 'Home',
    })
  })
  return menuItems
}

export const LocationContext = createContext(null);

export function LocationWatchHooks(props: { children: React.ReactNode }) {
    const dispatch = useAppDispatch()
    const location = useLocation();
    const { routeList } = useAppSelector((state) => state.routerStore)
    const locationState:any = useRef({
      from: null,
      to: null,
    });

    const getRouters = useCallback(async () => {
      const res:any = await getRoutes()
      const { data } = res
      if(data.data){
        const routeList:RouterProps[] = rewriteRoutesFullPath(data.data ?? [])
        const navBarList:navBarProps[] = setMenuItemList(data.data ?? [])  
        dispatch(setRouteList({
          routeList
        }))
        dispatch(setNavBarList({
          navBarList
        }))
      }
    },[])    
    
    useEffect(() => {
      locationState.current.from = locationState.current.to;
      locationState.current.to = location;
      if(routeList.length === 0){
        getRouters() // 如果没有路由获取路由
      }
    }, [location]);

    return (
        <LocationContext.Provider value={locationState}>
            {props.children}
        </LocationContext.Provider>
    );
}

export function useLocationWatch(): LocationTrans {
    const ref = useContext<any>(LocationContext);
    return ref.current;
}
