import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import './navbaronly.css';
import tmobiles from './tmobiles.png';
import '../index.css';
import "antd/dist/antd.css";
const { Header } = Layout;
const Search = Input.Search;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);



class Navbaronly extends Component {

  render() {
    return (
      <Header>

        <div className="logo">
          <img src={tmobiles} alt="tmobiles" className="logo_img" />
        </div>



        <div className="logo" />
        <Menu className="nav-area"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Icon className="icon" type="user" theme="filled" />

          <Search className="nav-area1"
            placeholder=" search here"
            onSearch={value => console.log(value)}
            enterButton
          />

           <div className="iconlist" >
          <Dropdown overlay={menu}>
            <a className="iconbell" href="#">
            <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }}  />
            <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
            <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }}/>
            </a>
          </Dropdown>
          </div>

          {/* <Menu.Item key="1"><Icon type="search" />Search</Menu.Item>  */}

        </Menu>
      </Header>


    );
  }
}

export default Navbaronly; 