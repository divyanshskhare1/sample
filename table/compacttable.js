import React, { Component } from 'react';

import { Table, Popconfirm, Icon, Card, Button} from 'antd';
// import 'antd/dist/antd.css';

import './compacttable.css';
  
class Compacttable extends Component {
    constructor(props) {
      super(props);
      // this.columns = [
      //   {
      //     title: "",
      //     dataIndex: "",
      //     key: '', 
          
      //   }
    //     {
    //       title: "Source Name",
    //       dataIndex: "sourcename",
    //       key: 'sourcename',
        
    //     },
    //     {
    //       title: "Type",
    //       dataIndex: "type", 
    //       key: 'type'
    //     },
    //     {
    //         title: "Description",
    //         dataIndex: "description", 
    //         key: 'description'
    //     },
       
      // ];
  
      this.state = {
        dataSource: this.props.dataSource,
        columns:this.props.columns,
        
      };
      
    }
  
    render() {
     console.log('In compatible' , this.props.dataSource)
      return (
            <div>
                <h4>Small size table</h4>
                <Table className="ctable" columns={this.props.columns} dataSource={this.props.dataSource} size="small" bordered>
                
                </Table>
            </div>
      );
      
    }
  }
  
  export default Compacttable;
