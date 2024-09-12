import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Insights from './pages/Insights';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';
import Bot from './pages/Bot';
import Navbar from './pages/NavbarHome';


// This component will help conditionally render the navbar
const AppLayout = ({ children }) => {
  const location = useLocation();
  // Hide navbar on the signup page
  const showNavbar = location.pathname !== '/signup';

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }



  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <AppLayout>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/bot" element={<Bot />} />
      </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
