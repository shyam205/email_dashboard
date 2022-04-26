import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Login from './components/Login';
import Sidebar from "./components/Sidebar";
import User from './components/User';
import './App.css';
import Sidebarsecondsection from "./components/Sidebarsecondsection";
import Navbar from "./components/Navbar";
import Sentemail from "./components/Sentemail";
import Useremail from "./components/Useremail";


function App() {
    const [sidebar, toggleSidebar] = useState(false)
 
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    let { pathname : path } = useLocation();
  
  return (
    <div className="App">
  
      <div className={`${path === '/' ? 'hide' : 'show'} 'sidebarcontain'`}>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      </div>
      <div className="main-section">
      <div className={`${path === '/' ? 'hide' : 'show'}`}>  <Navbar handleToggleSidebar={handleToggleSidebar} /></div>
     <div className='main-section-body'>
        <div className={`${path === '/' ? 'hide' : 'show'} 'sidebar-box'`}>
          <Sidebarsecondsection />
        </div>
            <div className="main">
              <div className={`${path === '/' ? 'hide' : 'show'} 'main-body-container main-body-header'`}>
                 
              </div>
              <Routes>
                <Route exact path="/"  element={<Login />} />  
                <Route path="/user" element={<User />} />
                <Route path="/sentemail" element={<Sentemail />} />
                <Route path="/receiveemail" element={<Useremail />} />
                <Route path="/sentmail" element={<Useremail />} />
              </Routes>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
