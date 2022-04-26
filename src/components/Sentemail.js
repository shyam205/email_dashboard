import React from 'react';
import { Link } from 'react-router-dom';

function Sentemail() {
    let useremail = JSON.parse(localStorage.getItem("sendemail") || "[]");
    let user = localStorage.getItem("usercredential");
     console.log(useremail);
  return (
    <div className='sentemail'>
       <div className='sentemail-container'>
         <p>Sent Email</p>
         {
           useremail[0]?.from !== user ? 'No Email found' :  
            useremail.map((data,i) => (
              <>
               <div key={i} className="sentemail-container-data-section">
                   <div className='sentemailr-left-section'>
                     <input type="checkbox" />
                     <p>{data.username}</p>
                     <p className={`${data.label === 'Adv' ? 'advbg' : ''} || ${data.label === 'client' ? 'clientbg' : ''} || ${data.label === 'document' ? 'documentbg' : ''} `  }>{data?.label}</p>
                   </div>
                   <div className='sentemail-middle-section'>
                   <Link to="/sentmail" className="divselection bodysection">
                     <p>{data.body}</p>
                     </Link>
                   </div>
                   <div className='sentemail-right-section'>
                     <p>12.06</p>
                   </div>

               </div>
               <hr></hr>
               </>
             ))
          
         }
         
         
       </div>
    </div>
  )
}

export default Sentemail