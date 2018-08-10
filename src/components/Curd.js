import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types' ;

  class Curd extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() {
      const {list,total} = this.props;
      const columns = [{
            title:'Name',
            dataIndex:'name',
            key:'name',
            align:'center',
            render: text => text
      },{
          title:'Website',
          dataIndex:'website',
          key:'website',
          align: 'center'
      },{
          title:'Address',
          dataIndex:'address',
          key:'address',
          align: 'center',
          render: text => text.city
      },
      {
          title:'Email',
          dataIndex:'email',
          align: 'center',
          key:'email'
      }
    ]
      return (
           <Table columns={columns} dataSource={list} bordered rowKey={record => record.id} pagination={{ pageSize: 5,total}}/>
        );
    }
  }
Curd.propTypes = {
   list:PropTypes.array.isRequired,
   total:PropTypes.number.isRequired
}
  export default  Curd;
