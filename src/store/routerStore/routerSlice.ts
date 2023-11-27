import { createSlice } from "@reduxjs/toolkit"
import {  RouterProps,navBarProps } from "@/interface/index" 
interface routerState {
  routeList:RouterProps[],
  navBarList: navBarProps[]
}

const initialState:routerState = {
  routeList:[],
  navBarList:[]
}
const routerSlice = createSlice({
  name: 'routerSlice',
  initialState,
  reducers: {
    setRouteList: (state,action) => {
      state.routeList = action.payload.routeList
    } ,
    setNavBarList: (state,action) => {
      state.navBarList = action.payload.navBarList
    }
  }
})

export const { setRouteList,setNavBarList } = routerSlice.actions

export default routerSlice.reducer