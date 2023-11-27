export interface RouterProps {
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

export interface navBarProps {
  label:string,
  key:string,
  icon?:string,
  disabled?:boolean
}

export interface MenuItem {
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[], 
}