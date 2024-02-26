import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NoPage() {
  const navigate = useNavigate()
  return (
    <div className='NoPage'>
      
    
      
      <div className="cards w-96 bg-neutral text-neutral-content ">
      <h1 className="card-title text-xl uppercase text-zinc-950">You have entered the wrong page</h1> 
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl uppercase  text-zinc-950">Want to return to the home page? <strong className=' text-orange-950'>Click the image</strong></h2>
          <div className="card-actions justify-center">
            <div tabIndex={0} role="button" className="btn-primary" onClick={() => navigate("/")}>
              <div className="max-w-10 max-h-10 rounded-full m-10">
                <img alt="Home Page" src="https://www.vhv.rs/dpng/f/571-5714251_illustration-of-a-red-pepper-red-home-hd.png" style={{ width: "600px", height: "200px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
