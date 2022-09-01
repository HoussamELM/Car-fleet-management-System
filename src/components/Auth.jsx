import React from "react"
import '../bootstrap.css';

export default function (props) {


  return (
 
    <div className="Auth-form-container bg-cover">
      <form className="Auth-form rounded-xl shadow border">
        <div className="Auth-form-content">
<div className='grid place-items-center'>       
 <img src="https://www.tangermedport.com/wp-content/uploads/2021/12/logo_tmpa.png" alt="logo tmpa"/>
</div>
          <div className="form-group mt-3">
            
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Username"
              
            />
          </div>
          <div className="form-group mt-3">
          
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              
            />
          </div>
          <div className="d-grid gap-2 mt-3 grid place-items-center">
          <button type="submit" class="ui button blue px-5 py-2.5 mr-2 mb-1" onClick={() => {window.location.href="/logged"}}>
            Login
          </button>
          </div>
          <p className="forgot-password text-right mt-2 ">
            
          </p>
        </div>
      </form>
    </div>

  )
}