import React from 'react';
import { Card } from 'react-bootstrap';
import { getCurrentUser } from '../utils/Auth';

const ProfilePage = () => {
  const user = getCurrentUser();

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
      <Card.Img variant="top" src={user.avatar || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <strong>Username:</strong> {user.username} <br />
          <strong>Email:</strong> {user.email} <br />
          <strong>Role:</strong> {user.role} <br />
          <strong>Points:</strong> {user.points}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
