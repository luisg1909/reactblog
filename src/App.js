import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import UserManagement from './pages/UserManagement';
import ProfilePage from './pages/ProfilePage';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PostPage from './components/Post';
import EditPost from './pages/EditPost';
import UserTable from './components/UserTable'; // Import UserTable

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/postcreate" element={<PostPage />} />
            <Route path="/edit/:postId" element={<EditPost />} />
            <Route path="/usertable" element={<UserTable />} />

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
