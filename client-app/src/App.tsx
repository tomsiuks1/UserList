import React, { Fragment, useEffect } from 'react';
import './App.css';
import { Route , Redirect } from "react-router-dom";
import { useStore } from './stores/store';
import ListData from './ListData';
import AddUserForm from './forms/AddUserForm';
import UserDetails from './UserDetails';


function App() {
  const {userStore} = useStore();

  useEffect(() => {
    userStore.loadUsers();
  }, [userStore, userStore.users])

  return (
    <Fragment>
      <Route exact path='/users' component={ListData} />
      <Route exact path='/users/add' component={AddUserForm} />
      <Route exact path='/users/details/:id' component={UserDetails} />
      <Route exact path='/'>
        <Redirect to='/users' />
      </Route>
    </Fragment>
  );
}

export default App;
