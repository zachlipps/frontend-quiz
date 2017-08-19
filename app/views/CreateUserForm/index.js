import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'
import { connect } from 'react-redux'

class CreateUserForm extends Component {

  render() {
    return (
      <div>
        <div>
            <Link to="/" > Go Home </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
          />

          <input
            type="text"
            placeholder="Last Name"
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

export default CreateUserForm;