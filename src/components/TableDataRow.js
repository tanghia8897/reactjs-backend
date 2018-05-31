import React, { Component } from 'react';

class TableDataRow extends Component {
    deleteButtonClick = (idUser)=>{
        this.props.deleteButtonClick(idUser);
    }
    editClick = () =>{
        this.props.editData();
        this.props.changStateUser();
    }
    phanquyen=()=>{
        if(this.props.permission === 1){
            return ("ADMIN")
        }
        else if(this.props.permission === 2){
            return ("MODERATOR")
        }
        else{
            return ("NOMAL")
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.phanquyen()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning" onClick={()=>this.editClick()}><i className="fa fa-edit" />EDIT</div>
                    <div className="btn btn-danger" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fa fa-delete" />DELETE</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;