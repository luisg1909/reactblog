import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { getFromSession, saveToSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';
import { Post } from '../utils/DataModel';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = getCurrentUser();

    if (!currentUser) {
        alert('not registered')
      navigate('/login');
      return null;
    }

    
    const { title, content, image } = formData;

    if (!title || !content) {
      setError('Title and Content are required.');
      return;
    }

    const posts = getFromSession('posts') || [];
    const newPost = new Post(
      posts.length + 1, // Generate a unique ID for the post
      title,
      content,
      currentUser.username,
      new Date(),
      image
    );

    posts.push(newPost);
    saveToSession('posts', posts);

    setSuccess(true);
    setError(null);
    setFormData({ title: '', content: '', image: '' }); // Reset the form
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
      <h3>Create a New Post</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Post created successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL (optional)"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default PostPage;
