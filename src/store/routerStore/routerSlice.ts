import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface RouterProps {
  name: string,
  path: string,
  hidden: boolean,
  redirect: string,
  component: string,
  alwaysShow?: boolean,
  fullpath?: string,
  meta?: {
    title: string,
    icon: string,
    noCache: boolean,
    link?: string | null
  },  
  children?:RouterProps[]
}

interface routerState {
  routeList:RouterProps[]
}

const initialState:routerState = {
  routeList:[]
}
const routerSlice = createSlice({
  name: 'routerSlice',
  initialState,
  reducers: {
    setRouteList: (state,action:PayloadAction<routerState>) => {
      state.routeList = action.payload.routeList
    } 
  }
})

export const { setRouteList } = routerSlice.actions

export default routerSlice.reducer