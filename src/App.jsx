import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Home from './Page/Home/Home';
import Video from './Page/Video/Videos';


function App() {
 const[sidebar,setsidebar]= useState(true);
  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>

    </div>




  );
}

export default App;
