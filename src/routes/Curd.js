import React, { Component } from 'react';
import CurdUi from '../components/Curd' ;
import {connect} from 'dva'

class Curd extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (<div>
        <CurdUi list={this.props.list} total={this.props.total}/>
    </div>  );
  }
}

export default connect(({users})=>({list:users.list,total:users.total||1}))(Curd);
