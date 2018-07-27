import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);


class teamStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ecsData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ecsData: products
      });
    }, 5000);
  }

  render () {
    return (
      <BootstrapTable data={ this.state.ecsData }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    );
  }
}

export default teamStats;