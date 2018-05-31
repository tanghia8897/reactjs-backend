    import React, { Component } from 'react';
    import './../App.css';
    import Header from './Header';
    import Search from './Search';
    import TableData from './TableData';
    import AddUser from './AddUser';
    import dataUser from './data.json';
    const uuidv1 = require('uuid/v1');

    class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        doitrangthai:false,
        data:dataUser,
        searchText:"", 
        isEditUser:false,
        userEditObject:{}
      }
    }
    deleteUser = (idUser)=>{
      console.log(idUser)
      var tempData = this.state.data.filter(item=>item.id !== idUser)
      this.setState({
        data:tempData
      })
    }
    getUserEditInfoApp = (info)=>{
      this.state.data.forEach((value,key)=>{
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.permission = info.permission
        }
      })
    }
    changStateUser=()=>{
      this.setState({
        isEditUser:!this.state.isEditUser
      })
    }
    editUser = (user)=>{

          this.setState({ //cập nhật lại dữ liệu
            userEditObject:user
          })

        console.log(user);
    }
    getNewUser = (name,tel,permission)=>{ //Lây data từ hàm adduser và đưa vào data.json
          var item={}
          item.id = uuidv1();
          item.name = name
          item.tel = tel
          item.permission = permission

          var items=this.state.data
          items.push(item)

          this.setState({ //cập nhật lại dữ liệu
            data:items
          })
    }

    doitrangthai = ()=>{ //đổi ngược state ban đầu
      this.setState({
        doitrangthai:!this.state.doitrangthai
      })
    }

    getDataSearch = (dl)=>{ 
      this.setState({
        searchText:dl
      })
    }
      render() {
        var ketqua=[] //khởi tạo mãng kq để lưu những thằng phù hợp khi duyệt mãng
        this.state.data.forEach((item) => { //duyệt qua từng phần tử trong data
            if(item.name.indexOf(this.state.searchText) !== -1){ //duyệt từng tên qua từng thằng trong mãng,nếu bằng trả ra chỉ số,còn k ra -1
                ketqua.push(item);
            }
        });
        // console.log(ketqua);

        return (
          <div>
              <Header/>
              <div className="searchForm">
                <div className="container">
                  <div className="row">
                      <Search

                      getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
                      getConnect={(dl)=> this.getDataSearch(dl)}
                      ketnoi={()=> this.doitrangthai()} 
                      doitrangthai={this.state.doitrangthai}
                      editUser={this.state.isEditUser}
                      changStateUser={()=>this.changStateUser()}
                      userEditObject={this.state.userEditObject}
                      />
                      <div className="col-12"> <hr/></div>
                      <TableData data={ketqua}
                      deleteUser={(idUser)=>this.deleteUser(idUser)}
                      funEditUser={(user)=>this.editUser(user)}
                      changStateUser={()=>this.changStateUser()}
                      />
                      <AddUser 
                      connect = {(name,tel,permission)=>this.getNewUser(name,tel,permission)}
                      doitrangthai={this.state.doitrangthai} ketnoi={()=> this.doitrangthai()}/>
                  </div>
                </div>
              </div>
          </div>
        );
      }
    }

    export default App;
