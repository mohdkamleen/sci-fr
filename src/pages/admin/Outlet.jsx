import { BellOutlined, CaretDownOutlined, CarFilled, DatabaseOutlined, FileAddOutlined, FileOutlined, GlobalOutlined, HomeOutlined, LineChartOutlined, LogoutOutlined, ProfileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', "/", <HomeOutlined />),
  getItem('Car', 'car', <CarFilled />),   
];


export default function () {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate() 

  const handleLogout = () => {
    window.confirm("Are you sure want lo logout ? ") && localStorage.removeItem("token") || window.location.reload() 
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)} >

        {!collapsed ? <div className='logo'>WhiteEagle</div> : <div className='logo'>WE</div>}

        <Menu
          theme="dark"
          defaultSelectedKeys="/"
          mode="inline"
          onClick={(e) => navigate(e.key)}
          items={items} />
          
          <p style={{color:"gray",padding:"10px 30px",cursor:"pointer"}} onClick={handleLogout}><LogoutOutlined /> Logout</p>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "25px",
            alignItems: "center",
            background: colorBgContainer,
          }}
        >
          <Badge count={2}>
            <BellOutlined style={{ fontSize: '22px', color: '#08c' }} />
          </Badge>

          <Badge>
            <Avatar size={30} icon={<UserOutlined />} shape="circle" /> &nbsp; WhiteEagle <CaretDownOutlined style={{ color: "gray" }} />
          </Badge>

        </Header>
        <Content>
          <div
            style={{
              padding: "0 5%",
              minHeight: 400,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          &copy; CarParking {(new Date().getFullYear())} All Right Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}; 