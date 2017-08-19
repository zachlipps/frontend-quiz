import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { graphql, gql } from 'react-apollo';

class Home extends React.PureComponent {
  renderUsers() {
    if (this.props.AllUsersQuery && this.props.AllUsersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.AllUsersQuery && this.props.AllUsersQuery.error) {
      return <div>Error</div>;
    }

   const usersToRender = this.props.AllUsersQuery.allUsers

    return (
      <div>
        {usersToRender.map((user, index) => {
          const { firstName, lastName, id } = user
          return (
            <div key={id}>
              <Link
                to={{
                  pathname: `/show/${id}`,
                  state: {
                    user,
                  },
                }}
              >
                {`${firstName} ${lastName}`}
              </Link>
            </div>
          )
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <p>Home Component</p>
        <Link to="about">
          Link to about
        </Link>
        {this.renderUsers()}
      </div>
    )
  }
}

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      createdAt,
      firstName,
      lastName,
      id, 
      updatedAt
    }
  }
`

export default graphql(ALL_USERS_QUERY, { name: 'AllUsersQuery' })(Home)
