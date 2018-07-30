import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';

import '/Users/Nathan/Development/loiltyco/node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='Name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='GP'>
            GP
          </TableHeaderColumn>
          <TableHeaderColumn dataField='G'>
            G
          </TableHeaderColumn>
          <TableHeaderColumn dataField='A'>
            'A'
          </TableHeaderColumn>
          <TableHeaderColumn dataField='P'>
            P
          </TableHeaderColumn>
          <TableHeaderColumn dataField='+/-'>
            +/-
          </TableHeaderColumn>
          <TableHeaderColumn dataField='PIM'>
            PIM
          </TableHeaderColumn>
          <TableHeaderColumn dataField='PPG'>
            PPG
          </TableHeaderColumn>
          <TableHeaderColumn dataField='PPP'>
            PPP
          </TableHeaderColumn>
          <TableHeaderColumn dataField='SHG'>
            SHG
          </TableHeaderColumn>
          <TableHeaderColumn dataField='SHP'>
            GWG
          </TableHeaderColumn>
          <TableHeaderColumn dataField='OTG'>
            OTG
          </TableHeaderColumn>
          <TableHeaderColumn dataField='S'>
            S
          </TableHeaderColumn>
          <TableHeaderColumn dataField='S%'>
            S%
          </TableHeaderColumn>
          <TableHeaderColumn dataField='FO%'>
            FO%
          </TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}
 
export default Table1;