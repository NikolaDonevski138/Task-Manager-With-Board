import React, { useEffect } from 'react'
import UserList from './UserList'
import UserListFilters from './UserListFilters'
import { connect } from "react-redux"
import apiCall from '../api/apiCall';

const UserDashboardPage = (props) => {

  // Example call
  useEffect(() => {
    props.dispatch(
      apiCall(
        props.dispatch,
        'someEmployee',
        {},
        '?id4=1011'
      )
    );
  });

  return (
    <div>
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Users</h1>
          </div>
        </div>
      </div>
      <UserListFilters />
      <UserList />
    </div>
  )
}

export default connect()(UserDashboardPage);
