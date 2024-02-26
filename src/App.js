
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

import CreateUser from './PAGES/CreateUser';
import EditUser from './PAGES/EditUser';
import Dashboard from './PAGES/Dashboard';
import { useState } from 'react';
import UserList from './Components/UserList';
import NoPage from './PAGES/NoPage';




function App() {
  const Users = [
    {
     id:1,
     name:"sudhir",
    
     email:"mechsudharsanan555@gmail.com",
     phone:8678924085,
     qualification:"B.E"
    },
    {
     id:2,
     name:"Vicky",
     
     email:"vicky@gmail.com",
     phone:12549779233,
     qualification:"BSC"
    },
    {
      id:3,
      name:"Aravind",
      
      email:"aravind@gmail.com",
      phone:145549779233,
      qualification:"BTec(IT)"
     },
     {
      id:4,
      name:"Mukesh",
      
      email:"mukes@gmail.com",
      phone:124552129233,
      qualification:"BE"
     },
     {
      id:5,
      name:"Mathan",
     
      email:"mathan91@gmail.com",
      phone:8659508825,
      qualification:"B.E"
     },
   ]

   const [user,setUser]=useState(Users)
  return (
  <Routes>
    <Route exact path='/' element={<Dashboard
    user={user}
    setUser={setUser}
    />} />
    <Route path='/create' element={<CreateUser
     user={user}
     setUser={setUser}
    />}/>
    <Route path='/edit/:id' element={<EditUser
     user={user}
     setUser={setUser}
    />}/>
    <Route path='/Users' element={<UserList
    user={user}
    setUser={setUser}
    />}/>
    <Route path='*' element={<NoPage/>}/>
    
  </Routes>
  );
}

export default App;
