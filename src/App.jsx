import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/SignUpPage';
import GuestPage from './pages/GuestPage';
import LogInPage from './pages/LogInPage';
import ProfileSetting from './pages/SettingPage';
function App() {

  if (!localStorage.getItem("user:id")) {
    localStorage.setItem("UserID", "#")
  }
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSetting />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default App;