import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getFromSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const posts = getFromSession('posts') || [];
  const currentUser = getCurrentUser(); // Could be null if not logged in
  const navigate = useNavigate();

  const handleEdit = (postId) => {
    navigate(`/edit/${postId}`); // Navigate to the edit page
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
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
                {/* View Button */}
                <Button
                  variant="primary"
                  onClick={() => navigate(`/post/${post.id}`)}
                  style={{ marginRight: '10px' }}
                >
                  View
                </Button>

                {/* Conditionally Render Edit Button for Admins */}
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
