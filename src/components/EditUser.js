import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission,
        }
    }
    saveButton = ()=>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);

        this.props.changStateUser();
    }
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    
    render() {
        return (
            <div className="col"> 
              <form>
                <div className="card border-secondary mb-3">
                      <div className="card-header">Edit</div>
                      <div className="card-body text-primary">
                        <div className="form-group">
                          <input onChange={(event)=>this.isChange(event)}  type="text" name="name"  className="form-control" aria-describedby="helpId" placeholder="UserName" />
                        </div>
                        <div  className="form-group">
                          <input onChange={(event)=>this.isChange(event)}  type="text" name="tel"  className="form-control" aria-describedby="helpId" placeholder="Tel" />
                        </div>
                        
                          <div className="form-group">
                            <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="form-control" name="permission" >
                              <option value>Chọn quyền mặc định</option>
                              <option value={1}>Admin</option>
                              <option value={2}>Modrator</option>       
                              <option value={3}>Nomal</option>
                            </select>
                          </div>
                        
                        
                        <div className="btn-group">
                          <input type="button" value="Save" onClick={()=>this.saveButton()} className="btn  btn-warning" />
                          <div className="btn btn-block btn-secondary" onClick={()=>this.props.changStateUser()}>Close</div>
                        </div>
                      </div>
                    </div>
                    </form>
                  </div>
        );
    }
}

export default EditUser;