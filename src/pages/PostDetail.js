import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFromSession, saveToSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';
import { Form, Button, Card } from 'react-bootstrap';

const PostDetail = () => {
  const { postId } = useParams();
  const posts = getFromSession('posts') || [];
  const currentUser = getCurrentUser();

  const post = posts.find((p) => p.id === Number(postId)) || null;

  // Initialize state
  const [comments, setComments] = useState(post ? post.comments || [] : []);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (post) {
      post.comments = comments; // Update comments in the specific post
      saveToSession('posts', posts); // Save updated posts to sessionStorage
    }
  }, [comments, posts, post]);

  const handleAddComment = () => {

    if (!newComment.trim()) return;
  const currentUser = getCurrentUser();
  if (!currentUser) {alert("you must be logged in");return;}

    const comment = {
      id: comments.length + 1,
      user: {
        username: currentUser.username,
        avatar: currentUser.avatar || 'https://via.placeholder.com/50',
      },
      text: newComment,
      date: new Date(),
    };

    setComments([...comments, comment]); // Update state with new comment
    setNewComment('');

    // Update user points
    const users = getFromSession('users') || [];
    const user = users.find((u) => u.username === currentUser.username);
  
    if (user) {
      console.log(`Before incrementing points: ${user.points}`); // Debug log
    
      user.points = (parseInt(user.points, 10) || 0) + 1;

      console.log(`After incrementing points: ${user.points}`); // Debug log
      saveToSession('users', users); // Save updated users to sessionStorage
    } else {
      console.error('Current user not found in users list.');
    }
  };

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" style={{ maxWidth: '100%' }} />}

      <hr />

      {/* Comment Section */}
      <h3>Comments</h3>
      <Form.Group controlId="newComment" className="mb-3">
        <Form.Label>Add a Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddComment}>
        Post Comment
      </Button>

      <hr />

      {/* Display Comments */}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Card key={comment.id} className="mb-3">
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={comment.user.avatar}
                  alt="Avatar"
                  style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                />
                <div>
                  <strong>{comment.user.username}</strong>
                  <br />                  
                  <small>{new Date(comment.date).toLocaleString()}</small>
                </div>
              </div>
              <p style={{ marginTop: '10px' }}>{comment.text}</p>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default PostDetail;
