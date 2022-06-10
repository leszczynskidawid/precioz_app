import ButtonForm from './atoms/Buttons/ButtonForm';
import VirtualComponentsDisigned from 'assets/VirtualComponetsDisigned';
import Dashboard from 'assets/HelperWorkerFolderWithRoutesComponent/Deashboard';
import NoMatch from 'assets/HelperWorkerFolderWithRoutesComponent/NoMach';
import React from 'react';
import {Route , Routes,} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/getAuth';
import ProtectedRoute from 'helpers/ProtectedRote';
import Admin from 'assets/HelperWorkerFolderWithRoutesComponent/Admin';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
      <Route path = '/'index element={<VirtualComponentsDisigned/>}/>
      <Route path="home" element={<VirtualComponentsDisigned />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />

    </Routes>
    </div>
  
  );
}

export default App;


const Navigation = () => {

  const {login, logout, token} = useAuth(); 
  console.log(token)
 
  return (
    <nav style={{fontSize:"29px" , border:"2px solid grey" ,background:"whitesmoke"}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin</NavLink>

  {token ?   <ButtonForm type = "button" onClick = {()=>logout()}>Logout</ButtonForm> : <ButtonForm type = "button" onClick = {()=>login()}>Login</ButtonForm>}

      
    </nav>
  );
};