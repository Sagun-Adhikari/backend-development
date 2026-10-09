# Project 2 Spotify

A simple Spotify-inspired backend starter built with Node.js, Express, MongoDB, and JWT-based authentication.

This project currently focuses on the foundation for a music app authentication flow, including:

- user registration
- password hashing with bcrypt
- JWT token generation
- MongoDB integration
- cookie-based auth support

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cookie-parser

## Project Structure

```bash
project2-spotify/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── user.model.js
│   └── routes/
│       └── auth.route.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Features

- User schema with username, email, password, and role
- Duplicate user prevention
- Secure password hashing before storing in the database
- JWT generation after successful registration
- Token stored in a cookie for authenticated requests

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB connection URL available
- A package manager such as npm

## Installation

1. Clone the project
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the project:

```env
MONGO_URL=mongodb://localhost:27017/project2-spotify
JWT_SECRET=your_super_secret_key
PORT=3000
```

## Run the Application

```bash
node server.js
```

The server will start on port `3000` by default.

## Example Auth Flow

### Register User

```http
POST /api/auth/register
```

Request body:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

## Notes

This project is currently a backend starter and is meant to be extended into a full Spotify-style application. You can continue by adding:

- login/logout routes
- protected routes
- artist/user dashboards
- playlist management
- music streaming endpoints
- frontend integration

## License

ISC
