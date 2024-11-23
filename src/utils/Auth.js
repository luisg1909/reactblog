import { getFromSession, saveToSession } from './SessionStorage';

export const login = (username) => {
  const users = getFromSession('users') || [];
  const user = users.find((u) => u.username === username);
  if (user) saveToSession('currentUser', user);
  return user;
};

export const logout = () => {
  sessionStorage.removeItem('currentUser');
};

export const getCurrentUser = () => getFromSession('currentUser');
