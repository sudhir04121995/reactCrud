import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditUser({user,setUser}) {
  const navigate=useNavigate()
  const {id}=useParams()
  const[idx,setIdx]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[Qualification,setQualification]=useState("")

  useEffect(()=>{
 console.log("id",id)
const editedUsers =user.find((use,index)=>use.id === parseInt(id))
console.log(editedUsers)
setIdx(editedUsers.idx)
    setName(editedUsers.name)
    setEmail(editedUsers.email)
    setPhone(editedUsers.phone)
    setQualification(editedUsers.qualification)
  },[id,user])
function editUsers(){
  const editUserObject={
    id:idx,
    name,
    email,
    phone,
    Qualification
  }
console.log(editUserObject)
const editIndex = user.findIndex((use,index)=>use.id ===parseInt(id))
user[editIndex]=editUserObject
setUser([...user])
navigate("/users")
}
  return (
    <div>
       <Base>
    <div className='Edit '>
    <div className="p-3 text-xl" >Please Edit The Form</div>
    <div className="form-control p-5 ">
      <label className="input input-bordered flex items-center gap-2 w-96 m-2 ">
        ID
        <input
          type="number"
          className="grow"
          placeholder="Enter User ID"
          value={idx}
          onChange={(e)=>setIdx(e.target.value)}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-96 m-2 ">
        Name
        <input
          type="text"
          className="grow"
          placeholder="Enter User Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </label>
    
      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
        Email
        <input
          type="text"
          className="grow"
          placeholder="Enter User Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
        Phone
        <input
          type="text"
          className="grow"
          placeholder="Enter User Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
     Qualification
        <input
          type="text"
          className="grow"
          placeholder="Enter User qualification"
          value={Qualification}
          onChange={(e)=>setQualification(e.target.value)}
        />
      </label>
      <button class="rounded-full bg-div-300 bg-black text-white p-2 m-5" onClick={editUsers} >Edit Users</button>
    </div>
    </div>
   
</Base>
    </div>
  )
}
