import React from "react";
import Header from "./components/header";
import './css/main.css';
import Users from "./components/users";
import AddUser from "./components/AddUser";

class App extends React.Component {
// Users data
constructor(props) {
  super(props);
  this.state = {
    users: [
      {
        id: 1,
        firstname: "Adam",
        lastname:"Person",
        age: 21,
        bio: "He is the first person in the history",
        isHappy: true,
      },
      {
        id: 2,
        firstname: "Eve",
        lastname:"Person",
        age: 20,
        bio: "She is the first woman in the history and also she is wife of Adam",
        isHappy: true,
      },
      {
        id: 3,
        firstname: "Cain",
        lastname:"Person",
        age: 2,
        bio: "The eldest son of Adam and Eve",
        isHappy: false,
      },
      {
        id: 4,
        firstname: "Abel",
        lastname:"Person",
        age: 1,
        bio: "The youngest son of Adam and Eve",
        isHappy: true,
      },
    ],
  };
  this.addUser=this.addUser.bind(this)
  this.deleteUser=this.deleteUser.bind(this)
  this.editUser=this.editUser.bind(this)
}

  

 
  handleInputChange(event) {
    this.setState({ userData: event.target.value });
  }

  render() {
    

    return (
      <div>
        <Header title="List of users" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser}     onDelete={this.deleteUser}/>
        </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
      </div>
    );
  }

  deleteUser(id){
         this.setState({
          users:this.state.users.filter((el)=>el.id !==id)
         })
  }

  editUser(user){
    let allUsers=this.state.users
    allUsers[user.id-1]=user

    this.setState({users: []},()=>{
      this.setState({users:[...allUsers]})
    })
  }
  addUser(user){
    const id=this.state.users.length+1
    this.setState({users:[...this.state.users,{id,...user}]})
    
  }
}

export default App;


