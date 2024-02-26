import React, { useState } from 'react'
import Base from '../Base/Base'

export default function CreateUser({user,setUser}) {
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[Qualification,setQualification]=useState("")

   function addNewUsers(){
        const newUsers={
          id,
          name,
          email,
          phone,
          Qualification
        }
        console.log(newUsers)
setUser([...user,newUsers]);
        setId("")
  setName("")
  
  setEmail("")
  setPhone("")
  setQualification("")
  }
  return (
    <Base>
    <div className='Add '>
    <div className="p-3 text-xl" >Please Fill The Form</div>
    <div className="form-control p-5 ">
      <label className="input input-bordered flex items-center gap-2 w-96 m-2 ">
        ID:
        <input
          type="number"
          className="grow"
          placeholder="Enter User ID"
          value={id}
          onChange={(e)=>setId(e.target.value)}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-96 m-2 ">
        Name:
        <input
          type="text"
          className="grow"
          placeholder="Enter User Name"
         value={name}
         onChange={(e)=>setName(e.target.value)}
        />
      </label>
    
      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
        Email:
        <input
          type="text"
          className="grow"
          placeholder="Enter User Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
        Phone:
        <input
          type="text"
          className="grow"
          placeholder="Enter User Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96 m-2">
     Qualification:
        <input
          type="text"
          className="grow"
          placeholder="Enter User qualification"
          value={Qualification}
          onChange={(e)=>setQualification(e.target.value)}
        />
      </label>
      <button class="rounded-full bg-div-300 bg-black text-white p-2 m-5"
      onClick={addNewUsers} >Add Users</button>
    </div>
    </div>
   
</Base>
  )
}
