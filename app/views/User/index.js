import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

const User = (props) => {
  const { firstName, lastName, id } = props.location.state.user

  return (
    <div>
      <Link to="/">Back Home</Link>
      <div > {`Name: ${firstName} ${lastName}`} </div>
      <div > {`id: ${id}`} </div>
    </div>
  );
}

export default User
