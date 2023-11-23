import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import {
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  OrderedListOutlined
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

const Home = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700566854969" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="6019" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M724.48 974.08h-128c-15.616 0-28.16-12.544-28.16-28.16v-217.856c0-10.24-8.704-18.944-18.944-18.944h-74.752c-10.24 0-18.944 8.704-18.944 18.944v217.856c0 15.616-12.544 28.16-28.16 28.16h-128c-54.528 0-99.072-41.472-99.072-92.672v-314.88H49.92c-11.52 0-21.76-6.912-26.112-17.408s-2.048-22.784 6.144-30.72L492.032 58.112c11.008-11.008 28.672-11.008 39.68 0l462.08 460.288c8.192 7.936 10.496 20.224 6.144 30.72s-14.592 17.408-26.112 17.408h-150.528v314.88c0.256 51.2-44.288 92.672-98.816 92.672z m-100.096-56.32h99.84c23.296 0 42.752-16.64 42.752-36.352v-343.04c0-15.616 12.544-28.16 28.16-28.16h110.592L512 117.76 118.016 510.208h110.592c15.616 0 28.16 12.544 28.16 28.16v343.04c0 19.712 19.712 36.352 42.752 36.352h99.84v-189.696c0-41.472 33.792-75.264 75.264-75.264h74.752c41.472 0 75.264 33.792 75.264 75.264v189.696z" 
      p-id="6020"
      fill={props.fill}
    >
    </path>
  </svg>  
)

const Mine = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700567115228" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="7059" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M248.848384 488.433664c-2.44224 0-4.368384 0.3584-5.881856 0.961536 2.05312-0.622592 4.245504-0.961536 6.503424-0.961536L248.848384 488.433664 248.848384 488.433664zM923.78112 757.349376c0.067584-1.24928 0.228352-2.473984 0.49152-3.654656C923.983872 754.235392 923.830272 755.392512 923.78112 757.349376L923.78112 757.349376zM968.808448 260.566016c0.012288-0.048128 0.012288-0.109568 0.012288-0.15872l0-0.586752C968.819712 260.074496 968.819712 260.327424 968.808448 260.566016L968.808448 260.566016zM923.75552 260.492288c0 0.050176 0 0.100352 0.013312 0.154624-0.013312-0.272384-0.013312-0.548864-0.013312-0.826368L923.75552 260.492288 923.75552 260.492288zM950.928384 936.170496c-6.337536-47.193088-20.200448-92.761088-41.194496-135.438336-4.104192-8.342528-8.454144-16.544768-13.063168-24.587264-0.012288-0.024576-0.023552-0.049152-0.055296-0.073728-19.985408-33.847296-44.504064-65.275904-73.084928-93.328384l-0.012288-0.012288c-6.213632-6.096896-12.612608-12.04736-19.203072-17.818624-46.990336-41.17504-101.239808-71.711744-159.089664-90.281984 10.472448-5.801984 20.599808-12.299264 30.326784-19.497984 11.081728-8.165376 21.627904-17.234944 31.547392-27.153408 52.15232-52.160512 80.88576-121.516032 80.88576-195.283968s-28.734464-143.122432-80.88576-195.279872C655.88224 86.20544 588.090368 57.587712 515.835904 56.554496c-1.143808-0.012288-2.294784-0.024576-3.439616-0.024576-1.149952 0-2.294784 0.012288-3.437568 0.024576-72.254464 1.033216-140.053504 29.650944-191.264768 80.862208-52.151296 52.15744-80.886784 121.51296-80.886784 195.279872s28.735488 143.123456 80.886784 195.283968c9.918464 9.918464 20.46464 18.988032 31.5392 27.153408 9.728 7.19872 19.861504 13.696 30.333952 19.497984-57.849856 18.57024-112.100352 49.106944-159.090688 90.281984-6.588416 5.772288-12.99456 11.721728-19.202048 17.818624-28.604416 28.076032-53.154816 59.53024-73.152512 93.4144-4.606976 8.042496-8.957952 16.243712-13.067264 24.587264-20.995072 42.677248-34.850816 88.245248-41.194496 135.438336-2.024448 15.118336 8.582144 29.018112 23.69536 31.04768 1.242112 0.165888 2.491392 0.251904 3.71712 0.251904 1.120256 0 2.214912-0.06144 3.309568-0.202752 10.928128-2.3808 19.750912-11.2896 21.460992-22.992896 12.730368-87.353344 54.361088-166.731776 114.204672-227.178496 71.023616-71.760896 167.68512-116.861952 272.149504-117.041152l0.590848 0c104.237056 0.357376 200.6784 45.415424 271.558656 117.041152 59.838464 60.44672 101.475328 139.826176 114.204672 227.178496 1.711104 11.677696 10.497024 20.575232 21.394432 22.980608 0.023552 0 0.036864 0.012288 0.06144 0.012288 1.09568 0.142336 2.197504 0.202752 3.316736 0.202752 1.22368 0 2.466816-0.086016 3.716096-0.251904C942.35136 965.188608 952.957952 951.288832 950.928384 936.170496L950.928384 936.170496zM511.806464 553.636864c-0.560128 0-1.114112 0-1.667072-0.012288-103.074816-0.756736-194.973696-72.370176-220.090368-168.431616-0.277504-1.045504-0.55296-2.10432-0.805888-3.162112-3.933184-15.881216-6.025216-32.381952-6.025216-49.334272 0-16.951296 2.092032-33.642496 6.025216-49.800192 0.252928-1.084416 0.528384-2.153472 0.805888-3.2256 25.252864-98.465792 118.007808-176.729088 221.75744-176.729088l1.180672 0c103.744512 0 196.5056 78.26432 221.758464 176.729088 0.277504 1.072128 0.55296 2.141184 0.805888 3.2256 3.931136 16.157696 6.023168 32.848896 6.023168 49.800192 0 16.953344-2.092032 33.453056-6.023168 49.334272-0.252928 1.057792-0.529408 2.116608-0.805888 3.162112-25.116672 96.06144-117.016576 167.67488-220.096512 168.431616C513.708032 553.636864 512.759808 553.636864 511.806464 553.636864L511.806464 553.636864zM511.806464 553.636864" 
      fill={props.fill}
      p-id="7060"
    >
    </path>
  </svg>  
)

const Detail = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700568372392" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="9908" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M610 351H390c-8.3 0-15-6.7-15-15s6.7-15 15-15h220c8.3 0 15 6.7 15 15 0 8.2-6.8 15-15 15zM610 449H390c-8.3 0-15-6.7-15-15s6.7-15 15-15h220c8.3 0 15 6.7 15 15 0 8.2-6.8 15-15 15zM525.6 547H390c-8.3 0-15-6.7-15-15s6.7-15 15-15h135.7c8.3 0 15 6.7 15 15-0.1 8.2-6.8 15-15.1 15z" 
      fill={props.fill}
      p-id="9909"
    >
    </path>
    <path 
      d="M700 205H300c-22.1 0-40 17.9-40 40v508c0 22.1 17.9 40 40 40h215c8.3 0 15-6.7 15-15s-6.7-15-15-15H310c-11 0-20-9-20-20V255c0-11 9-20 20-20h380c11 0 20 9 20 20v313c0 8.3 6.7 15 15 15s15-6.7 15-15V245c0-22.1-17.9-40-40-40z" 
      fill={props.fill}
      p-id="9910"
    >
    </path>
    <path 
      d="M778.6 813.6c-5.9 5.9-15.4 5.9-21.2 0L722 778.2c-5.9-5.9-5.9-15.4 0-21.2 5.9-5.9 15.4-5.9 21.2 0l35.4 35.4c5.9 5.9 5.9 15.4 0 21.2z" 
      fill={props.fill}
      p-id="9911"
    >
    </path>
    <path 
      d="M625 773c-26.7 0-51.8-10.4-70.7-29.3-39-39-39-102.4 0-141.4s102.4-39 141.4 0c18.9 18.9 29.3 44 29.3 70.7 0 26.7-10.4 51.8-29.3 70.7-18.9 18.9-44 29.3-70.7 29.3z m0-170c-17.9 0-35.9 6.8-49.5 20.5-27.3 27.3-27.3 71.7 0 99 13.2 13.2 30.8 20.5 49.5 20.5s36.3-7.3 49.5-20.5S695 691.7 695 673s-7.3-36.3-20.5-49.5C660.8 609.8 642.9 603 625 603z" 
      fill={props.fill}
      p-id="9912"
    >
    </path>
  </svg>  
)

const List = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700569367228" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="4041" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z" 
      p-id="4042"
      fill={props.fill}
    >
    </path>
    <path 
      d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z" 
      p-id="4043"
      fill={props.fill}
    >
    </path>
    <path 
      d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z" 
      p-id="4044"
      fill={props.fill}
    >
    </path>
  </svg>  
)

const Set = (props:Partial<CustomIconComponentProps>) => (
  <svg 
    t="1700569817609" 
    class="icon" 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="5135" 
    width={props.width}
    height={props.height}
  >
    <path 
      d="M512 323.584c-118.784 0-215.552 96.768-215.552 215.552s96.768 215.552 215.552 215.552 215.552-96.768 215.552-215.552-96.768-215.552-215.552-215.552z m0 376.832c-89.088 0-161.792-72.704-161.792-161.792 0-89.088 72.704-161.792 161.792-161.792s161.792 72.704 161.792 161.792c0 89.6-72.704 161.792-161.792 161.792z" 
      fill={props.fill}
      p-id="5136"
    >
    </path>
    <path 
      d="M926.208 377.344h-29.696c-5.12-11.776-10.752-23.552-16.896-34.816l14.336-14.336c18.432-18.432 28.672-43.008 28.672-69.12s-10.24-50.688-28.672-69.12l-52.224-52.224c-36.864-36.864-101.376-36.864-138.24 0l-20.992 20.992c-11.776-5.12-24.064-10.24-36.352-14.336v-46.08c0-53.76-44.032-97.792-97.792-97.792H475.136c-54.272-0.512-97.792 43.52-97.792 97.28v46.08c-10.24 3.584-20.48 7.68-30.72 11.776l-32.256-32.256c-36.864-36.864-101.376-36.864-138.24 0L123.904 176.128c-37.888 37.888-37.888 99.84 0 138.24l23.04 23.04c-6.656 12.8-13.312 26.112-19.456 39.936h-29.696C44.032 377.344 0 420.864 0 475.136v74.24c0 53.76 44.032 97.792 97.792 97.792h10.752c5.12 19.456 12.288 38.912 20.48 58.368-21.504 24.064-33.28 50.688-33.792 76.288-0.512 24.576 9.216 47.616 28.16 66.56l52.224 52.224c35.84 35.84 97.792 36.864 134.656 3.072 2.048 1.024 4.608 2.56 7.168 3.584 11.776 6.656 23.552 12.8 26.112 13.824 11.264 5.12 23.04 9.216 34.304 13.312 2.56 22.016 11.776 43.008 26.624 58.88 18.432 19.968 43.52 30.72 70.656 30.72h74.24c51.2 0 93.184-39.424 97.28-89.6 23.04-8.192 46.08-17.92 67.584-29.696 37.376 33.28 98.304 31.744 134.144-4.096l52.224-52.224c18.432-18.432 28.672-43.008 28.672-69.12s-10.24-50.688-28.672-69.12l-5.12-5.12c8.192-18.944 15.36-38.4 20.48-57.856h10.752c53.76 0 97.792-44.032 97.792-97.792V475.136c-0.512-54.272-44.544-97.792-98.304-97.792z m44.032 171.52c0 24.064-19.456 44.032-44.032 44.032h-32.256c-12.8 0-23.552 8.704-26.624 21.504-6.144 28.16-15.872 56.832-29.184 84.48-5.12 10.24-3.072 22.528 5.12 30.72l18.432 18.432c16.896 16.896 16.896 45.056 0 61.952l-52.224 52.224c-16.896 16.896-45.056 16.896-61.952 0l-10.752-10.752c-8.704-8.704-22.528-10.24-33.28-3.584-28.672 17.92-59.392 31.744-91.648 40.96-11.776 3.072-19.456 13.824-19.456 26.112v11.776c0 24.064-19.456 44.032-44.032 44.032H475.136c-15.36 0-25.088-7.168-30.72-13.312-9.216-10.24-14.336-25.088-12.8-39.936 1.024-12.288-6.656-24.064-18.432-28.16-14.336-4.608-31.232-10.24-46.592-16.896-2.56-1.536-12.8-6.656-22.528-11.776-19.968-10.752-31.232-16.896-39.936-16.896-6.144 0-10.752 2.56-16.384 8.192l-10.752 10.752c-16.384 16.384-45.568 16.384-61.952 0l-52.224-52.224c-8.704-8.704-12.8-17.408-12.8-27.648 0.512-15.36 11.776-34.816 30.208-51.712 8.704-8.192 11.264-20.992 6.144-31.744-13.824-28.16-23.552-56.832-29.696-84.48-2.56-12.288-13.824-21.504-26.624-21.504h-32.256c-24.064 0-44.032-19.456-44.032-44.032V475.136c0-24.064 19.456-44.032 44.032-44.032h48.128c11.264 0 21.504-7.168 25.088-17.408 8.704-24.064 20.992-46.592 32.768-67.584 6.144-10.752 4.096-24.064-4.608-32.256L161.792 276.48c-16.896-16.896-16.896-45.056 0-61.952l52.224-52.224c16.384-16.384 45.568-16.384 61.952 0l45.568 45.568c8.192 8.192 20.48 10.24 30.72 5.12 19.456-9.728 39.424-17.408 59.392-23.04 11.776-3.072 19.456-13.824 19.456-26.112V97.792c0-24.064 19.456-44.032 44.032-44.032h74.24c24.064 0 44.032 19.456 44.032 44.032V163.84c0 11.776 8.192 22.528 19.456 26.112 22.016 6.144 43.52 14.848 64 25.088 10.24 5.12 23.04 3.072 31.232-5.12l34.304-34.304c16.896-16.896 45.056-16.896 61.952 0l52.224 52.224c8.192 8.192 12.8 19.456 12.8 30.72 0 11.776-4.608 22.528-12.8 30.72l-29.184 29.184c-8.704 8.704-10.24 22.528-4.096 32.768 11.776 19.456 21.504 40.448 29.696 61.952 4.096 10.752 13.824 17.408 25.088 17.408h48.128c24.064 0 44.032 19.456 44.032 44.032v74.24z" 
      fill={props.fill}
      p-id="5137"
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
  Home: (props:Partial<CustomIconComponentProps>) => <Icon component={ () => Home(props) } { ...props }></Icon>,
  Mine: (props:Partial<CustomIconComponentProps>) => <Icon component={ () => Mine(props) } { ...props }></Icon>,
  Detail: (props:Partial<CustomIconComponentProps>) => <Icon component={ () => Detail(props) } { ...props }></Icon>,
  User: (props:Partial<CustomIconComponentProps>) => <Icon component={ () => Mine(props) } { ...props }></Icon>,
  List:(props:Partial<CustomIconComponentProps>) => <Icon component={ () => List(props)} { ...props }></Icon>,
  Set:(props:Partial<CustomIconComponentProps>) => <Icon component={ () => Set(props)} { ...props }></Icon>
}

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

