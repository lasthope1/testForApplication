import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import useAuth from './hook/useAuth';
import {IUser} from './hook/useUser';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const { user } = useAuth();
  const [userInfo, setUser] = useState<IUser | null>(user)

  return (
    <>
      <Router>
          <Routes>
              <AuthContext.Provider value={{ user , setUser }}>
                  <Route path="/" element={<LoginPage/>} />
                  <Route path="/home" element={<HomePage/>} />
                  <Route path="/register" element={<RegisterPage/>} />
              </AuthContext.Provider>
          </Routes>
      </Router>
    </>
  );
}

export default App;
