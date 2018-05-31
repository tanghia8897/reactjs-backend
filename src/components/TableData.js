import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick=(idUser)=>{
    this.props.deleteUser(idUser)
  }
  showdata = ()=>this.props.data.map((value,key)=>{ // đưa data vào ô trống
      return(
        <TableDataRow
          changStateUser={()=>this.props.changStateUser()}
          editData={(user)=>{this.props.funEditUser(value)}}
          deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
          name={value.name}
          tel={value.tel}
          permission={value.permission}
          id={value.id}
          stt={key}
          key={key}/>
      )
  })
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-hover {1:striped|sm|bordered|hover|inverse} table-inverse ">
              <thead className="thead-inverse|thead-default">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                  {this.showdata()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;