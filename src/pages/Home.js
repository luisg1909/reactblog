import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getFromSession } from '../utils/SessionStorage';

const Home = () => {
  const posts = getFromSession('posts') || [];

  return (
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
              <Button href={`/post/${post.id}`}>View</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
