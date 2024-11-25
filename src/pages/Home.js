import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFromSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';

const Home = () => {
  const posts = getFromSession('posts') || [];
  const currentUser = getCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  const message = location.state?.message;

  const handleEdit = (postId) => {
    navigate(`/edit/${postId}`); // Navigate to the edit page
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      {message && (
        <Alert variant="success" className="mb-4">
          {message}
        </Alert>
      )}
      <h3>All Posts</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{new Date(post.dateCreated).toLocaleDateString()}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/post/${post.id}`)}
                  style={{ marginRight: '10px' }}
                >
                  View
                </Button>
                {currentUser && currentUser.role === 'admin' && (
                  <Button
                    variant="success"
                    onClick={() => handleEdit(post.id)}
                  >
                    Edit
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
