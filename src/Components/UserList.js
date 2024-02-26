import React from 'react'
import Base from '../Base/Base'
import UserCard from './UserCard'

export default function UserList({user,setUser}) {
  return (
    <Base>
    <div className='UserCard'>
     { user.map((use)=>(
<UserCard
users={use}
key={use.id}
user={user}
setUser={setUser}
/>
     ))}
     </div>
    </Base>
  )
}
