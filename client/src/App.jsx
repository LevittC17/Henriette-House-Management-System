import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainUserPage from './pages/public_pages/MainUserPage';
import MainAdminPage from './pages/admin_pages/MainAdminPage';
import Home from './pages/public_pages/Home';
import About from './pages/public_pages/About';
import PropertyDetails from './pages/public_pages/PropertyDetails';
import Login from './pages/public_pages/Login';
import Signup from './pages/public_pages/Signup';
import AddProperty from './pages/admin_pages/AddProperty';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainUserPage />}>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Property/:id' element={<PropertyDetails />} />
        </Route>
        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/' element={<MainAdminPage />}>
         
          <Route path='/addProperty' element={<AddProperty />} />
          </Route>
      </Routes>
    </div>
  );
};

export default App;
