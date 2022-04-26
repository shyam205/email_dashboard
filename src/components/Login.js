import React, {useState} from 'react';
import { logincredentials } from '../userdata';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newdata = logincredentials.filter((data) => data.email === email && data.password === password);
     if(newdata.length>0){
      
       localStorage.setItem("usercredential", newdata[0].email);
       window.location = '/user';
     }
     return null;
  }
  if(localStorage.getItem('usercredential')){
    window.location = '/user';
  }

  return (
    <div className='login'>
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Email' name="email" onChange={e => setEmail(e.target.value)} /><br></br>
                  <input type="password" placeholder='Password' name="password" onChange={e => setPassword(e.target.value)} /><br></br>
                  <input type="submit" value='submit' />
            </form>
        </div>
    </div>
  )
}

export default Login