import React from 'react'

const Navbar = () => {
  return (
    <div className="p-5">

<div class="ui secondary  menu">
<img className= 'ml-6 mt-2'src='https://www.tangermedport.com/wp-content/uploads/2021/12/logo_tmpa.png'/>
  
  <div class="right menu">
  <div className= 'mr-4 mt-2'>    
  <button class="ui button blue" onClick={() => {window.location.href="/"}}>
      Logout
    </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar