import React from 'react'

export default function NavBar() {
  return (
    <div>
       <div className="navbar bg-primary-content">
  <div className="flex-1">
    <a className="text-xl text-white">CRUD</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>
    </div>
    </div>
  )
}
