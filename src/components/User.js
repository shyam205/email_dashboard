import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { userdatas } from '../userdata';
var count = 0;
function User() {
    //const [checkedInputNumber,setcheckedInputNumber] = useState(0);
    const [selectedEmail,setselectedEmail] = useState([]);
    let user = localStorage.getItem("usercredential");
  
    let personaldata = userdatas.filter(data => data.to === user);
    localStorage.setItem("previousdata",JSON.stringify(personaldata));
    
    let newuserdata = JSON.parse(localStorage.getItem("sendemail") || "[]");
    // console.log('n',newuserdata[0].to)
    // console.log('user',user)
    // console.log('type',user.trim() === (newuserdata[0].to).trim())

    let filtersendmail = newuserdata.filter(data => data.to === user);
   
    let Alldata = [...filtersendmail, ...personaldata];
    const [alldata,setalldata] = useState(Alldata);
   // let filtereddata = userdatas.filter((data) => data.to === user);
    
    // console.log(newuserdata);
    // console.log(userdatas);
    // console.log(user)
    // console.log(newuserdata[0].To)
    // useEffect(()=>{
    //   document.querySelectorAll('.inputcheckbox').forEach(function(f){
        
    //     // f.checked = false;
    //   })
    // },alldata);
    const handleClick = (e) => {
     
       var divselection = document.querySelector(".divselection");
       
       var userrecievebody = divselection.querySelector(".user-middle-section").innerText;
       
       var userfrom = document.querySelector(".user-left-section p").textContent;
      
       var recievedata = [{
         "from":userfrom,
         "body":userrecievebody
       }]
       localStorage.setItem("recieveemail",JSON.stringify(recievedata));
    }

    const handleSelect = (e,id) => {
      // window.addEventListener('deleteanode',deletefun);
      //var deletenode = e.target.parentNode.parentNode;
      
      if(e.target.checked){
        selectedEmail.push(id)
        // selectedEmail([...selectedEmail,id]);
        count++;
      }
      else{
        if(count>=1){
          selectedEmail.pop()
          count--;
        }
      }
      console.log(count)
      if(count>0){
        let hideiconssection = document.querySelector(".icons-container");
        hideiconssection.classList.remove('hideicons');
      }
      else{
        let hideiconssection = document.querySelector(".icons-container");
        hideiconssection.classList.add('hideicons');
      }
      //var removesection = document.querySelector(".user-container-data-section");
      // var hideiconssection = document.querySelector(".hideicons");
      // hideiconssection.classList.remove('hideicons');
      // handleDelete(deletenode);
    }

     const handleDelete = (e) => {
       //let allsendEmail = JSON.parse(localStorage.getItem("sendemail") || "[]");
       //let filteredEmail = allsendEmail.filter(data=>data.id!==selectedEmail[0]);
      
      //  localStorage.setItem("sendemail",JSON.stringify(filteredEmail));

       let filteredalldata = alldata.filter(data=>data.id!==selectedEmail[0]);
      
        setselectedEmail([]);
       setalldata(filteredalldata);
       count = 0;
      //deletenode.classList.add("removeselectedsection");
      // var removesection = document.querySelector(".user-container-data-section");
      //   removesection.classList.add("removeselectedsection");
        
     }

      const handlebody = (e) => {
        
        var tagetvalue = e?.target?.textContent;
        localStorage.setItem('tagetvalue', JSON.stringify(tagetvalue));
        
      }

  return (
    <div className='user'>
        <div className='user-container'>
           <div className='user-container-data'>
               <div className="icons-container hideicons">
                    <section>
                        <div className='' onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>
                        </div>
                    </section>
                    <section>
                       <input type="text" placeholder="Search Email" />
                    </section>
                 </div>
             {/* {
               newuserdata[0]?.To !== user?  
               filtereddata.map((data,i) => (
                
                <div key={i} className="user-container-data-section divselection">
                 
                    <div className='user-left-section'>
                      <input type="checkbox" className="inputcheckbox" onChange={(e)=>handleSelect(e,data.id)} />
                      <Link to="/receiveemail" onClick={handleClick} className="divselection">
                      <p>{data.username}</p>
                      <p className={`${data.label === 'Adv' ? 'advbg' : ''} || ${data.label === 'client' ? 'clientbg' : ''} || ${data.label === 'document' ? 'documentbg' : ''} `  }>{data?.label}</p>
                      </Link>
                    </div>
                    <div className='user-middle-section'>
                    <Link to="/receiveemail" onClick={handlebody} className="divselection"> {data.body}</Link>
                    </div>
                    <div className='user-right-section'>
                      <p>12.06</p>
                    </div>
                    
                </div>
                
              ))
               : null} */}
               
              {alldata && 
               alldata.map((data,i) => (
                
                <div className="user-container-data-section" key={i}>
                   
                    <div className='user-left-section'>

                      <input type="checkbox" className="inputcheckbox" onChange={(e)=>handleSelect(e,data.id)} />
                      {/* <Link to="/receiveemail" onClick={handleClick} className="divselection"></Link> */}
                      <p>{data.username}</p>
                      <p className={`${data.label === 'Adv' ? 'advbg' : ''} || ${data.label === 'client' ? 'clientbg' : ''} || ${data.label === 'document' ? 'documentbg' : ''} `  }>{data?.label}</p>
                    </div>
                    <Link to="/receiveemail" onClick={handleClick} className="divselection bodysection">
                    <div className='user-middle-section' onClick={handlebody}>
                    
                      {data.body}
                      
                    </div>
                    <div className='user-right-section'>
                      <p>12.06</p>
                    </div>
                    </Link>
                </div>
                
              ))
             }

             
           </div>
        </div>
    </div>
  )
}

export default User