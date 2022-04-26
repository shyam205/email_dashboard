import React, { useRef, useEffect } from 'react'


function Useremail() {

    let recieveemail = JSON.parse(localStorage.getItem("recieveemail") || "[]");
    let popupemaildata = JSON.parse(localStorage.getItem("sendemail") || "[]");
    let previousdata = JSON.parse(localStorage.getItem("previousdata") || "[]");
    let targetvalue = JSON.parse(localStorage.getItem('tagetvalue'));
    console.log(targetvalue)
  
    const handleEmaildetail = () => {
        var popupemaildetail = document.querySelector(".popup-emaildetail");
        // popupemaildetail.classList.remove("removemaildetails");
       popupemaildetail.classList.toggle("removemaildetail");
       
    }

    const box = useRef(null);
    useOutsideAlerter(box);
    const arrowref = useRef(null);
    function useOutsideAlerter(ref) {
        useEffect(() => {
       
          // Function for click event
          function handleOutsideClick(event) {
            if(event.target.className === 'downcaret') return false;
            if (ref.current && !ref.current.contains(event.target)) {
                var popupemaildetail = document.querySelector(".popup-emaildetail");
                popupemaildetail.classList.add("removemaildetail");
                
            }
            
          }
       
          // Adding click event listener
          document.addEventListener("click", handleOutsideClick);
          return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref]);
      }

    

  return (
    <div className='recieveemail'>
      {/* <h4>Sent Emails</h4> */}
      <div className='useremail-container'>
         <span>From :<p> {popupemaildata[0]?.from }</p></span>
         <span onClick={handleEmaildetail} className="downcaret" ref={arrowref} >&#9660;</span>
         <div className='popup-emaildetail removemaildetail' ref={box}>
            
                <>
                     <p><span>from :</span>{popupemaildata[0]?.from || previousdata[0]?.from }</p>
                     <p><span>To :</span>{popupemaildata[0]?.To || previousdata[0]?.to}</p>
                     <p><span>Cc :</span>{popupemaildata[0]?.cc || 'not mentioned'}</p>
                </>      
              
         </div>
         <hr></hr>
         <p>{targetvalue || popupemaildata[0]?.body}</p>
      </div>
    </div>
  )
}

export default Useremail