import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'
import { connect } from 'react-redux'
import { updateForm, resetForm } from '../../redux/Actions/sync';

class CreateUserForm extends Component {
  onFirstNameChange(text) {
    this.props.updateForm({
      form: 'createUser',
      key: 'firstName',
      value: text.target.value,
    });
  }

  onLastNameChange(text) {
    this.props.updateForm({
      form: 'createUser',
      key: 'lastName',
      value: text.target.value,
    });
  }

  render() {
    const { firstName, lastName } = this.props.forms;

    return (
      <div>
        <div>
            <Link to="/" > Go Home </Link>
        </div>
        <div>
          <input
            onChange={this.onFirstNameChange.bind(this)}
            type="text"
            placeholder="First Name"
            value={firstName}
          />

          <input
            onChange={this.onLastNameChange.bind(this)}
            type="text"
            placeholder="Last Name"
            value={lastName}
          />

          <button>
            Create User
          </button>

        </div>

      </div>
    );
  }

}

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($firstName: String!, $lastName: String!) {
    createUser(
      firstName: $firstName,
      lastName: $lastName,
    ) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;

const mutativeUserForm = graphql(CREATE_USER_MUTATION, { name: 'CreateUserMutation' })(CreateUserForm);

const mapStateToProps = (state) => {
  return {
    forms: state.forms.createUser,
  };
};

export default connect(mapStateToProps, { updateForm, resetForm })(mutativeUserForm);
