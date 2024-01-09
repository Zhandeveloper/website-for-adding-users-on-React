import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_form: false
    };
    this.user = this.props.user; // исправлено объявление переменной user
  }

  getUserCategory = (age) => {
    if (age >= 18) {
      return " an adult";
    } else if (age >= 13 && age < 18) {
      return " a teenager";
    } else {
      return "a child";
    }
  };

  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.onDelete(this.user.id)} />
        <IoHammerSharp className="edit-icon" onClick={()=>{
          this.setState({
            edit_form:!this.state.edit_form
          })
        }}/>
        <h3>
          {this.user.firstname} {this.user.lastname}-{this.user.age}
        </h3>
        <p>{this.user.bio}</p>
        <p>{`This user is - ${this.getUserCategory(this.user.age)}`}</p>
        <b>{this.user.isHappy ? "Happy :)" : "Sad :("}</b>

        {this.state.edit_form && <AddUser user={this.user} onAdd={this.props.onEdit} />}
      </div>
    );
  }
}

export default User;

