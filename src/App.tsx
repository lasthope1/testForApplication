import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import { IAuthContext, IUser } from './interface/Interfaces';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <>
      <Router>
          <AuthContext.Provider value={{ user , setUser }}>
              <Routes>
                  { (user === null) ?<Route path="/" element={<LoginPage/>} /> :
                  <Route path="/home" element={<HomePage/>} /> }
                  <Route path="/register" element={<RegisterPage/>} />
              </Routes>
          </AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;
