import VirtualComponentsDisigned from 'assets/VirtualComponetsDisigned';
import React from 'react';
import {Route , Routes,} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = '/' element={<VirtualComponentsDisigned/>}/>
  
    </Routes>
    </div>
  
  );
}

export default App;
