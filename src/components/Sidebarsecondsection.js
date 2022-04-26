import React from 'react';
import {Link} from 'react-router-dom';
import Emailpopup from './Emailpopup'

function Sidebarsecondsection() {
  let newuserdata = JSON.parse(localStorage.getItem("sendemail") || "[]");
  let user = localStorage.getItem("usercredential");

  var Messagecount = 0;

  var a = newuserdata.filter(data => data.to == user)
  var Messagecount = a.length;
    const handleComposeEmail = () => {
        var emailpopup = document.querySelector(".emailpopup");
        emailpopup.classList.remove("hidecomposeemail");
    }
  return (
    <div className='Sidebarsecondsection'>
        <div className='Sidebarsecondsection-container'>
          <button className='compose-mail-button' onClick={handleComposeEmail}>Compose Mail</button>
          <p className='main-tag'>Folder</p>
          <section><Link to="/user">Inbox<span className='inboxmessage'>{`${Messagecount >=1 ? Messagecount :''}`}</span></Link></section>
          <section><Link to="/sentemail">Send Mail</Link></section>
          <section>Important</section>
          <section>Draft</section>
          <section>Trash</section>
          <p className='main-tag'>Catagory</p>
            <section><div className='work circle'></div><span>Work</span></section>
            <section><div className='document circle'></div><span>Documents</span></section>
            <section><div className='social circle'></div><span>Social</span></section>
            <section><div className='advertise circle'></div><span>Advertising</span></section>
            <section><div className='client circle'></div><span>Clients</span></section>
            
            <Emailpopup />
        </div>
    </div>
  )
}

export default Sidebarsecondsection