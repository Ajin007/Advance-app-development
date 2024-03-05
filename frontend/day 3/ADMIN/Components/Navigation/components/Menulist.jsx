import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, BarsOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const MenuList = ({darkTheme}) => {
   return (
       <Menu
        theme={darkTheme ? 'dark' : 'light'} 
        mode = "inline"
         className="menu-bar">
           <Menu.Item key="home" icon={<HomeOutlined />}>
           Dashboard
           </Menu.Item>
           <Menu.Item key="activity" icon={<AppstoreOutlined />}>
           Activity
           </Menu.Item>

           <Menu.SubMenu 
           key="tasks" 
           icon={<BarsOutlined />}
           title="Tasks">
           <Menu.Item key="task-1">College</Menu.Item>
           <Menu.Item key="task-2">Course</Menu.Item>
           <Menu.SubMenu key="subtasks" title="Subtasks">
               <Menu.Item key="subtask-1">View College Details</Menu.Item>
               <Menu.Item key="subtask-2">View Course Details</Menu.Item>
               </Menu.SubMenu>
            </Menu.SubMenu>

           
           <Menu.Item key="progress" icon={<AreaChartOutlined />}>
           Progress
           </Menu.Item>
           <Menu.Item key="payment" icon={<PayCircleOutlined />}>
           Settings
           </Menu.Item>
           <Menu.Item key="settings" icon={<SettingOutlined />}>
           Logout
           </Menu.Item>
       </Menu>
   );
   };
export default MenuList;