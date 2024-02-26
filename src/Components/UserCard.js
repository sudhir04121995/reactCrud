import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

export default function UserCard({users,user,setUser}) {
  const navigate=useNavigate()

  function deleteUser(id){
    const deleteCard =user.filter((use,index)=>use.id !== id)
    setUser(deleteCard)
  }
  return (
   
    
      <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
  <h2 className="card-title">{users.name}</h2>
   
       <p>Email:{users.email}</p>
       <p>Phone:{users.phone}</p>
       <p>Education:{users.qualification}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-success" onClick={()=>navigate(`/edit/${users.id}`)}><FaEdit /></button>
    <button className="btn btn-outline btn-error"
    onClick={()=>deleteUser(users.id)}><FaTrash/></button>
    </div>
  </div>
</div>
   
  )
}
