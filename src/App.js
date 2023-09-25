import {Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Commonents/AboutUs';
import Form from './Commonents/Auth/Form';
import Layout from './Container/Layout';
import Error from './Commonents/Error';
// import Header from './Commonents/Header/Menu';


function App() {
  return (
    
      <Routes>
        <Route exact path='/' element={<Layout/>}>
         <Route index element={<Navigate to="/home" replace />}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<Form/>} />   
         </Route> 
          <Route path='*' element={<Error />} />  
      </Routes>

  );
}

export default App;
