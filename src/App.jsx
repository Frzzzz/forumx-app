import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddThreadPage from './pages/AddThreadPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddThreadPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/leaderboards" element={<LeaderboardsPage />} />
      <Route path="/threads/:id" element={<DetailPage />} />
    </Routes>
  );
}
export default App;
