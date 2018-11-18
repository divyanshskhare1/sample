import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Input} from 'antd';
import './customicon.css';

const Search = Input.Search;

const menu = (
    <Menu>
    
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">Edit Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Sign Out</a>
      </Menu.Item>
      
      {/* <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
   
    </Menu>
  );

class CustomIcon extends Component {

    render() {
      return (              
       <div>
         
         <Search className="nav-area1"
            placeholder=" search here"
            onSearch={value => console.log(value)}
            enterButton
          />

        <Dropdown overlay={menu} trigger={['click']}>    
          
          <a className = "icon">
          <Icon type="bell" theme="outlined" style={{ fontSize: '22px', color: '#FFFFFF' }}  className="iconbell"/>
          <Icon type="message" theme="outlined" style={{ fontSize: '22px', color: '#FFFFFF' }} className="iconmsg" />
          <Icon type="user" theme="outlined" style={{ fontSize: '22px', color: '#FFFFFF' }}  className="iconuser"/>
          </a>
          
          
        </Dropdown>          
        </div>
      );
    }
}    

export default CustomIcon;