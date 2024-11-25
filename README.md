# BlogApp

BlogApp is a simple blogging platform built with **React**, **Bootstrap**, and **SessionStorage**.
 The application provides two types of user roles: regular users and admin users. 
 It allows users to create, view, and comment on posts, the users earns points for every comment, a point is added.
 Admin users also have the same functions of regular users(post,comment,earns points) and have the ability to manage posts and users.
 sessionstorage is used for save users and post,not cloud or local database connection is necesary
---

## **Features**

### **User Roles**
1. **Admin:**
   - Can create posts.
   - Can edit and delete any post.
   - Can view and modify all user details (username, name, email, role, password, and points).
   - Can reset user passwords.
   - Can view the passwords of all users.
   - Can register new users (username,name,email,password,role)

2. **Regular User:**
   - Can create posts.
   - Can edit their own posts.
   - Can comment on posts (earns points for each comment).
   - Can view user details but cannot modify them.
   - Can register new users (username,name,email,password,role)

---

### **Functionalities**

#### **Post Management**
- **Create Posts**:
  - Users can create posts with a title, content, and an image selected from a carousel of predefined images.
    (to create post first login with username and password that previously where registered)
  
- **Edit Posts**:
  - Admins can edit any post (title, content, and image).
  - Regular users can edit only their own posts.

- **View Posts**:
  - All posts are visible to both logged-in and non-logged-in users.

#### **User Management**
- **User List**:
  - Displays all registered users in a sortable Bootstrap table with details like role, name, username, email, points, and password (admin only).

- **Modify User Details** (Admin Only):
  - Admins can edit user details (name, username, email, role, points, and password) directly from the table.
  - Admins can reset user passwords to a default value (`default123`).

#### **Sorting**
- Users and posts are displayed in sortable tables, with sorting options for columns like name, role, and points.

#### **Authentication**
- Users can register with a username, name, email, avatar, and password.
- Users can log in to access role-based features like editing their own posts or managing users (for admins).

---

### **Technologies Used**
1. **Frontend**:
   - React
   - React Router
   - React-Bootstrap
   - SessionStorage (for data persistence)

2. **Design**:
   - Bootstrap (Responsive UI)

---

## **Steps to Install and Run the Project**

### **Prerequisites**
- Node.js installed on your system.
- A package manager like `npm` or `yarn`.

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/blogapp.git
   cd blogapp
### **Autor**
   Developed by Luis Godoy @luisg1909. for demo purposes to demostrate my skills about react,typescript,use of interfaces,css,components. part of my portfolio. Feel free to contribute or reach out for questions or improvements.
   
