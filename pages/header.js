import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Tables from '../pages/table';
import { isDate } from 'moment';

const { Header, Content } = Layout;

class Headers extends Component {
    
    render() {
      return (
        <Layout >
        
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
                <isDate/>
                <Tables/>
              </div>            
            </Content>
        
        </Layout>
      );
    }
  }

  export default Headers;