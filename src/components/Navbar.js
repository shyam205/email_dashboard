import React from 'react'

const Navbar = ({ handleToggleSidebar}) => {
    let newuserdata = JSON.parse(localStorage.getItem("sendemail") || "[]");
  let user = localStorage.getItem("usercredential");

  var Messagecount = 0;

  var a = newuserdata.filter(data => data.to === user)
  Messagecount = a.length;

      const handleLogout = () => {
        localStorage.removeItem("usercredential");
        window.location = '/';
      }
    
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-leftsection'>
              <span onClick={() => handleToggleSidebar()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></span>
               <input type="text" placeholder='Search for something...' />
            </div>
            <div className='navbar-rightsection'>
                <div className='messagebox'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg><sup className={`${Messagecount <1 ? 'no-notification' : ''}`}>{`${Messagecount >=1 ? Messagecount :''}`}</sup>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;