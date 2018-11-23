import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import './dropdown.css';


const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <a>You are all caught up! </a>
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <a>No new messages</a>
    </Menu.Item>
  </Menu>
);

const menu3 = (
  <Menu className="menu">
    <Menu.Item key="0">
      <a >Edit Profile</a>
    </Menu.Item>
    <Menu.Divider className="menu9" />
    <Menu.Item key="1">
      <a >View Profile</a>
    </Menu.Item>
    <Menu.Divider  className="menu9"/>
     <Menu.Item key="2">
      <a >Sign Out</a>
    </Menu.Item>
   
  </Menu>
);


class DropDown extends Component {
  render() {
    return (

        <div className="iconlist" >
            <Dropdown overlay={menu1} trigger={['click']}>
                <a className="iconbell" href="#">
                    <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                </a>
            </Dropdown>

            <Dropdown overlay={menu2} trigger={['click']}>
                <a className="iconbell" href="#">
                    <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                </a>
            </Dropdown>

            <Dropdown overlay={menu3} trigger={['click']} onClick={this.showModal}>
                <a className="iconbell" href="#">
                    <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                </a>
            </Dropdown>

        </div>

    );
  }
}

export default DropDown;