import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permission:""
    }
  }
  
    isChange = (event)=>{
      var name = event.target.name
      var value = event.target.value
      this.setState({
        [name]:value
      })
  
    }

    hienthiform = ()=>{
        if(this.props.doitrangthai===true){
            return(
              <div className="col"> 
              <form>
                <div className="card border-primary mb-3">
                      <div className="card-header">Add New</div>
                      <div className="card-body text-primary">
                        <div className="form-group">
                          <input type="text" name="name" onChange={(event)=> this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="UserName" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="tel" onChange={(event)=> this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="SDT" />
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <select className="form-control" onChange={(event)=> this.isChange(event)} name="permission">
                              <option value>Chọn quyền mặc định</option>
                              <option value={1}>Admin</option>
                              <option value={2}>Modrator</option>
                              <option value={3}>Nomal</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="btn-group">
                          <input type="reset" value="Add New" className="btn  btn-primary" onClick={(name,tel,permission)=> this.props.connect(this.state.name,this.state.tel,this.state.permission)} />
                          <div className="btn btn-block btn-outline-secondary"onClick={()=> this.props.ketnoi()}>Close</div>
                        </div>
                      </div>
                    </div>
                    </form>
                  </div>
                )
        }
    }
    render() {
        return (
            
                <div className="card text-left"> 
                    {this.hienthiform()}
                </div>
           
        );
    }
}

export default AddUser;