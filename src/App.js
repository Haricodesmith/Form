import React, { useState, Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersLsist] = useState([]);
  const addUserHandler = (uName, uage) =>{
    setUsersLsist((prevUsersList) =>{
      return [...prevUsersList, {name: uName, age: uage, id: Math.random().toString()}];
    })
  }
  return (
    <Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UserList  users={usersList} />
    </Fragment>
  );
}

export default App;
