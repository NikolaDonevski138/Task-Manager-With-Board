import React from "react"
import { connect } from "react-redux"
import UserListItem from "./UserListItem" //UserListItem from ./UserListItem
import selectUsers from "../selectors/users" //selectUsers from '../selectors/users

export const UserList = (
  props //UserList
) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-desktop">Users info</div>
    </div>
    <div className="list-body">
      {props.users.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No users</span>
        </div>
      ) : (
        props.users.map(user => {
          //props.users.map((user))
          return <UserListItem key={user.id} {...user} /> //UserListItem key={user.id} {...user}
        })
      )}
    </div>
  </div>
)

const mapStateToProps = state => ({
  users: selectUsers(state.users, state.filters) //users: selectUsers(state.users,state.filters)
})

export default connect(mapStateToProps)(UserList) //(UserList)
