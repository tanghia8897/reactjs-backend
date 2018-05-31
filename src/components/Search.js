import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue: "",
            userObj:{}
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info);
    }
    
    isEditUser = ()=>{
        if(this.props.editUser === true){
            return(
                <EditUser
                getUserEditInfo={(info)=>this.getUserEditInfo(info)}
                changStateUser={()=>this.props.changStateUser()}
                userEditObject={()=>this.props.userEditObject()}
                />
            )
        }
    }
    isChange = (event)=>{
        console.log(event.target.value); 
        this.setState({
            tempValue:event.target.value //giá trị mà mình nhập vào ô search
        })
        this.props.getConnect(this.state.tempValue);//gọi hàm getConnect bên App.js để fill ra trong lúc search
    }

    
    swapbutton = ()=>{ //hàm trả về nút adduser
        if(this.props.doitrangthai === false ){
            return(
                <div className="btn btn-block btn-outline-info"  onClick={()=> this.props.ketnoi()}>Add User</div>
            )
        }
    }
   
    render() {
        return (
            
            <div className="col-12">
                {this.isEditUser()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Search"
                         onChange={(event) => this.isChange(event)} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.getConnect(this.state.tempValue)}>Tìm kiếm</div>
                    </div>
                </div>
                <div className="form-group">
                    {this.swapbutton()} 
                </div>
            </div>
        );
    }
}

export default Search;