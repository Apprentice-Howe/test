import React from 'react'
import { Layout, Menu } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { withRouter, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from "../router";
import '../css/mySlider.css'

const { Header, Sider, Content } = Layout;



class MySider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      userList: []
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.history.push('/page1')
    }
  }

  render() {
    return (
      <Layout>
        <Sider className="my-slider" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {
              routes.map((item,index)=>{
                return <Menu.Item key={ index }
                                  icon={ item.icon }>
                  <Link to={item.path}>
                    { item.name }
                  </Link>
                </Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            { renderRoutes(routes) }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MySider)
