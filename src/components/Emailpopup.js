import React from 'react';
import { logincredentials } from '../userdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Emailpopup() {

    let user = localStorage.getItem("usercredential");
    let loginuser = logincredentials.filter((data) => data.email === user);
    
    const handleCancel = () => {
        var emailpopup = document.querySelector(".emailpopup");
        emailpopup.classList.add("hidecomposeemail");
         
    }

    //var ccadd = document.querySelector(".ccadd");

    const handleCc = () => {
        var ccadd = document.querySelector(".ccadd");
        var Ccmail = document.createElement('div');
        
        Ccmail.setAttribute("contentEditable", "true");
        Ccmail.setAttribute("data-text", "Cc");
        Ccmail.classList.add("cctext");
        ccadd.append(Ccmail);
    }
    const guidGenerator =() =>{
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
     var username = loginuser[0]?.username;
    const handleSubmit = (e) => {
       const allsendMail = JSON.parse(localStorage.getItem("sendemail")) || [];
       
       var sendto = document.querySelector(".sendtoemail").innerText;
       var heading = document.querySelector(".subjectheadline").innerText;
       var emailbody = document.querySelector(".emailbody").innerText;
      
      var Cccontent;
      if(!document.querySelector(".cctext")){
          Cccontent = '';
      }
      else{
        Cccontent = document.querySelector(".cctext").innerText;
      }
      console.log(Cccontent);
      var senduseremail = [{
          id:guidGenerator(),
          "to":sendto,
          "from":user,
          "username":username,
          "heading":heading,
          "body":emailbody,
          "cc":Cccontent
      }]

      
      allsendMail.push(senduseremail[0])
       localStorage.setItem("sendemail",JSON.stringify(allsendMail));
    //    window.location = '/sentemail'
    //   let useremail = JSON.parse(localStorage.getItem("sendemail") || "[]");

    

    var emailpopup = document.querySelector(".emailpopup");
    emailpopup.classList.add("hidecomposeemail");

    toast.success("Email Sent Successful!",{
        position: "top-center",
      });

    }
  return (
  <>
    <div className='emailpopup hidecomposeemail'>
        <div className='emailpopup-container'>
            <div className='emailpopup-headersection'>
                <p>New Message</p>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448C0 430.3 14.33 416 32 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H32C14.33 480 0 465.7 0 448z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"/></svg>
                <span onClick={handleCancel}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></span>
                </div>
            </div>

            <div className='sendtoemail-section'>
            <span>To</span>
            <div contentEditable="true" className='sendtoemail'></div>
            <span onClick={handleCc}>Cc</span>
            <span>Bcc</span>
            </div>
             
            <div className='ccadd'></div>

            <div className='subjectheadline-section'>
            <span>Subject</span>
            <div contentEditable="true" className='subjectheadline'>

            </div>
            </div>
              
            <div contentEditable="true" className='emailbody'></div>
            <div className='bottombutton'><button className='sendbutton' onClick={handleSubmit}>Send</button></div>
        </div>
        
    </div>
    <ToastContainer />
</>
  )
}

export default Emailpopup