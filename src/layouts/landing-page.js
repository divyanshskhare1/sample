import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Layout } from 'antd';
import tmobiles from './tmobiles.png';
import NavigationBar from './sidebar/navigation-bar';
import Body from './body/body';
import './landing-page.css';

const { Sider } = Layout;

class LandingPage extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      
      

        <Sider collapsible>
        <div className="logo">
          <img src={tmobiles} alt="tmobiles" className="logo_img" />
        </div>
          <NavigationBar />
        </Sider>
        
        <Layout>
          <Body />
        </Layout>
        
      </Layout>
    );
  }
}
export default LandingPage;