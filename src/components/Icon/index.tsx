import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import {
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  FileTextOutlined      
} from "@ant-design/icons"

// svg 可添加的属性 
// interface CustomIconComponentProps
// width: string | number; // svg 元素宽度
// height: string | number; // svg 元素高度
// fill: string; // svg 元素填充的颜色
// viewBox?: string; // 
// className?: string; // 计算后的 svg 类名
// style?: React.CSSProperties; // 计算后的 svg 元素样式

interface IconProps {
  name:string,
}

const Avatar = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700536775749" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="5780" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M512 946.858667c-239.616 0-434.858667-195.242667-434.858667-434.858667S272.384 77.141333 512 77.141333s434.858667 195.242667 434.858667 434.858667-195.242667 434.858667-434.858667 434.858667z m0-828.757334c-217.088 0-393.898667 176.810667-393.898667 393.898667 0 217.088 176.810667 393.898667 393.898667 393.898667 217.088 0 393.898667-176.810667 393.898667-393.898667 0-217.088-176.810667-393.898667-393.898667-393.898667z" 
      p-id="5781"
      fill={props.fill}
    >
    </path>
    <path 
      d="M509.952 615.082667c-106.496 0-193.194667-86.698667-193.194667-193.194667s86.698667-193.194667 193.194667-193.194667c106.496 0 193.194667 86.698667 193.194667 193.194667S616.448 615.082667 509.952 615.082667z m0-345.429334c-83.968 0-152.234667 68.266667-152.234667 152.234667s68.266667 152.234667 152.234667 152.234667S662.186667 505.856 662.186667 421.888 593.92 269.653333 509.952 269.653333z"  
      p-id="5782"
      fill={props.fill}
    >
    </path>
    <path 
      d="M512 946.858667c-111.957333 0-219.136-43.008-300.373333-120.149334l-8.874667-8.192 3.413333-11.605333c37.546667-136.533333 162.474667-232.106667 303.786667-232.106667 143.36 0 268.288 96.938667 304.469333 234.837334l2.730667 11.605333-8.874667 8.192c-79.872 75.776-185.002667 117.418667-296.277333 117.418667zM249.173333 805.546667c72.362667 64.853333 165.205333 100.352 262.826667 100.352 96.256 0 187.733333-34.816 259.413333-98.304-34.816-114.005333-140.629333-192.512-261.461333-192.512-118.784 0-224.597333 77.824-260.778667 190.464z" 
      p-id="5783"
      fill={props.fill}
    >
    </path>
  </svg>   
)

const icons:{[key:string]: any} = {
  DownOutlined: (props:Partial<CustomIconComponentProps>) => <Icon component={DownOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon> ,
  UpOutlined:   (props:Partial<CustomIconComponentProps>) => <Icon component={UpOutlined as React.ForwardRefExoticComponent<any>} { ...props }></Icon> ,
  LeftOutlined: (props:Partial<CustomIconComponentProps>) => <Icon component={LeftOutlined as React.ForwardRefExoticComponent<any>} { ...props }></Icon>,
  RightOutlined: (props:Partial<CustomIconComponentProps>) => <Icon component={RightOutlined as React.ForwardRefExoticComponent<any>} { ...props }></Icon>,
  Avatar: (props:Partial<CustomIconComponentProps>) => <Icon component={ () => Avatar(props) } { ...props }></Icon>,
  Home: (props:Partial<CustomIconComponentProps>) => <Icon component={HomeOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>,
  Mine: (props:Partial<CustomIconComponentProps>) => <Icon component={UserOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>,
  Detail: (props:Partial<CustomIconComponentProps>) => <Icon component={FileTextOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>,
  User: (props:Partial<CustomIconComponentProps>) => <Icon component={UserOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>,
  List:(props:Partial<CustomIconComponentProps>) => <Icon component={UnorderedListOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>,
  Set:(props:Partial<CustomIconComponentProps>) => <Icon component={SettingOutlined as React.ForwardRefExoticComponent<any> } { ...props }></Icon>
}


// 添加antd里面的图表传name，style 自定义svg添加的传name,width,height,fill 
const CustomIcon = (props:Partial<CustomIconComponentProps> & IconProps) => {
  return ( 
    <>
      {
        icons?.[props.name]?.(props) ?? null
      }
    </>   

  )
}

export default CustomIcon

