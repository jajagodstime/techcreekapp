
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/MAIN';
import Member from './Components/Member';
import Membership from './MembershipPage/Membership';
import About from './pages/About';
import Connectpage from './pages/connectpage';
import Createpage from './pages/create';



import Learnpage from './pages/learn';


function App() {
  return (
   <div className='layout'>
     
     <Router>
          
        <Routes>
            <Route path="/" element={ <Main /> }/>
            <Route path="/membership" element={ <Membership /> }/>
            <Route path="/learn" element={ <Learnpage /> }/>
            <Route path="/connect" element={ <Connectpage /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/create" element={ <Createpage /> }/>
            
        </Routes>
     </Router>

   </div>
  );
}

export default App;
