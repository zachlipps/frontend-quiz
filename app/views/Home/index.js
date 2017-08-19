import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { graphql, gql } from 'react-apollo'
import styles from './styles'

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
          if (firstName === '' || lastName === '') return
          return (
            <div key={id} style={styles.userListStyles}>
              <Link
                style={styles.linkStyles}
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
      <div style={styles.general}>
        <p style={styles.homeText}>Home Component</p>
        <Link to="about">
          Link to about
        </Link>
        <div>
          <Link to="create">
            Link to create
          </Link>
        </div>
        {this.renderUsers()}
      </div>
    )
  }
}

export const ALL_USERS_QUERY = gql`
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
