import React from "react";

class AddUser extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: 0,
      bio: "",
      isHappy: false,
    };
  }

  render() {
    return (
      <form
        ref={(el) => (this.myForm = el)}
      >
        <input
          placeholder="First Name"
          onChange={(e) => this.setState({ firstname: e.target.value })}
        ></input>
        <input
          placeholder="Last Name"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        ></input>
        <input
          placeholder="age"
          type="number"
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <textarea
          placeholder="bio"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <label htmlFor="isHappy">You are happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        ></input>
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              age: this.state.age,
              bio: this.state.bio,
              isHappy: this.state.isHappy,
            };
            if (this.props.user) {
              this.userAdd.id = this.props.user.id; // Установка id только если есть this.props.user
            }
            this.props.onAdd(this.userAdd);
          }}
        >Add
        </button>
      </form>
    );
  }
}

export default AddUser;
