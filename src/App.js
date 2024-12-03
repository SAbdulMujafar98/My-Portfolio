import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes , Route} from 'react-router-dom'
import SkillPage from './Pages/SkillPage'
import EducationPage from './Pages/EducationPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactMePage from './Pages/ContactMePage';




function App() {
  return (
  
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/Skills' element ={<SkillPage />} />
      <Route path='/Education' element ={<EducationPage />} />
      <Route path='/Projects' element ={<ProjectsPage />} />
      <Route path='/Contact Me' element ={<ContactMePage />} />
    </Routes>


   
  );
}

export default App;
