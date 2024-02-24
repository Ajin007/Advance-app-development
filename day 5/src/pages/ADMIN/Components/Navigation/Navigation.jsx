import { useState } from 'react';
import {Button, Layout,theme } from 'antd';
import Logo from './components/Logo';
import Menulist from './components/Menulist';
import ToggleThemeButton from './components/ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import '../../../../assets/css/admin/navigation.css';
import DashboardPage from './TaskManagementTable';

const { Header, Sider } = Layout;
function Navigation() {
  const [darkTheme, setdarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setdarkTheme (!darkTheme);
  };

  const{
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <>
    <Layout>
      <Sider collapsed= {collapsed}
      collapsible 
      trigger={null}
      theme={darkTheme ? 'dark': 'light'}
      className="sidebar">
      <Logo />
      <Menulist darkTheme={darkTheme} />
      <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style = {{padding:0,background:
          colorBgContainer,color:'black' ,marginLeft:'-3px',width:'100%'}}>
          <Button 
          type='text' 
          className="togglee"
          onClick={()=> setCollapsed(!collapsed)}
          icon = {
            collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
           }/>
        </Header>
      <DashboardPage/>
      </Layout>
    </Layout>
    </>
    );
}

export default Navigation;
