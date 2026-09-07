# After7

> A youth-focused social platform for authentic connections, anonymous Q&A, and secure real-time communication.

After7 is a modern social platform designed to help young people connect, communicate, and build meaningful friendships in a privacy-conscious environment.

The platform combines **anonymous Q&A, random user matching, real-time messaging, friendship building, and voice/video communication** into one social experience.

---

## 🎯 Overview

After7 is built around the idea of **gradual connection and trust**.

Instead of immediately turning a new interaction into a permanent friendship, users first have the opportunity to communicate and get to know each other.

The platform provides:

- Anonymous Q&A
- Random user discovery
- Preference-based matching
- Real-time private messaging
- A 7-day trust-building period
- Friend requests
- Voice and video calling
- Real-time notifications
- Profile management
- Media sharing

The goal is to create a social environment where users have more control over how relationships develop.

---

# ✨ Key Features

## 🔐 User Authentication

- User registration and account creation
- Secure login
- JWT-based authentication
- Protected API routes
- Authentication middleware
- Session management
- Logout functionality
- Token refresh support

---

## 💬 Anonymous Q&A

Users can create anonymous links that can be shared with others.

Features include:

- Create anonymous Q&A links
- Share links with others
- Receive anonymous questions
- Submit questions without revealing identity
- Manage received questions

---

## 🎲 Random User Matching

After7 allows users to discover new people through random matching.

Matching can be based on:

- Gender preferences
- User preferences
- Availability
- Matching criteria

The goal is to make discovering new people simple while still giving users control over their preferences.

---

## 🔒 Real-Time Private Messaging

Users can communicate through private one-to-one conversations.

Features include:

- Real-time messaging
- Message delivery
- Typing indicators
- Message read status
- Online/offline status
- Chat history
- Real-time notifications

> If end-to-end encryption is implemented in the application, messages can be encrypted on the client before being transmitted or stored. The exact encryption implementation should be reviewed independently before making production security claims.

---

## ⏳ 7-Day Trust-Building System

One of the core concepts of After7 is the **7-day connection period**.

When two users begin chatting, they can communicate before becoming friends.

After the required 7-day period:

1. Users become eligible for a friend request.
2. One user can send a friend request.
3. The other user can accept or decline it.
4. Mutual friendship unlocks additional communication features.

This system is designed to encourage users to build familiarity and trust before creating a permanent connection.

---

## 🤝 Friend Requests

After the 7-day chat period:

- Users can send friend requests.
- Users can accept friend requests.
- Users can decline friend requests.
- Users can manage existing friendships.

If a friend request is declined, users can continue using the communication features that remain available to them.

---

## 📹 Voice & Video Calling

After mutual friendship approval, users can communicate through:

- Voice calls
- Video calls

WebRTC is used for peer-to-peer media communication.

Socket.IO can be used as the signaling layer for establishing WebRTC connections.

---

## 🔔 Real-Time Notifications

After7 provides real-time notifications for important events such as:

- New messages
- Friend requests
- Friend request acceptance
- New matches
- Online/offline status
- Incoming calls
- Other relevant social events

---

## 👤 Profile Management

Users can manage their profiles and preferences.

Profile functionality can include:

- Profile picture
- Display name
- Bio
- Gender
- Matching preferences
- Account settings
- Privacy settings

---

## ☁️ Media & File Uploads

Cloudinary is used for media storage and management.

Potential use cases include:

- Profile pictures
- Chat images
- User-uploaded media
- Other application assets

---

# 🛠️ Tech Stack

## Frontend

| Technology                     | Purpose                       |
| ------------------------------ | ----------------------------- |
| **Next.js**                    | Frontend framework            |
| **React**                      | UI library                    |
| **TypeScript**                 | Type-safe development         |
| **Socket.IO Client**           | Real-time communication       |
| **WebRTC**                     | Voice and video communication |
| **Tailwind CSS / CSS Modules** | Styling                       |

---

## Backend

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| **Node.js**    | JavaScript runtime            |
| **Express.js** | Backend framework             |
| **TypeScript** | Type-safe backend development |
| **Socket.IO**  | Real-time communication       |
| **JWT**        | Authentication                |
| **dotenv**     | Environment configuration     |

---

## Database & Storage

| Technology     | Purpose                |
| -------------- | ---------------------- |
| **MongoDB**    | Primary database       |
| **Cloudinary** | Media and file storage |

---

## Development Tools

| Tool        | Purpose                          |
| ----------- | -------------------------------- |
| **Git**     | Version control                  |
| **GitHub**  | Source control and collaboration |
| **Postman** | REST API testing                 |
| **npm**     | Package management               |

---

# 🏗️ Project Architecture

After7 follows a **client-server architecture**.

The application is divided into two major applications:

```text
after7/
│
├── client/       → Next.js + TypeScript frontend
│
└── server/       → Express.js + TypeScript backend
```

The frontend communicates with the backend using:

- REST APIs
- WebSocket connections through Socket.IO
- WebRTC for real-time audio/video

---

## High-Level Architecture

```text
                           ┌──────────────────────────┐
                           │        AFTER7 APP        │
                           └────────────┬─────────────┘
                                        │
                    ┌───────────────────┴───────────────────┐
                    │                                       │
                    ▼                                       ▼
          ┌────────────────────┐                  ┌────────────────────┐
          │      FRONTEND      │                  │       BACKEND       │
          │                    │                  │                     │
          │ Next.js            │                  │ Express.js          │
          │ TypeScript         │                  │ TypeScript          │
          │ React              │                  │ REST API            │
          └─────────┬──────────┘                  └──────────┬──────────┘
                    │                                        │
                    │                                        │
                    │ REST API                               │
                    ├───────────────────────────────────────►│
                    │                                        │
                    │ Socket.IO                              │
                    ├───────────────────────────────────────►│
                    │                                        │
                    │                                        ▼
                    │                              ┌────────────────────┐
                    │                              │      MongoDB       │
                    │                              │                    │
                    │                              │ Users              │
                    │                              │ Messages           │
                    │                              │ Conversations      │
                    │                              │ Friendships        │
                    │                              │ Questions          │
                    │                              │ Notifications      │
                    │                              └────────────────────┘
                    │
                    │
                    │ WebRTC
                    ▼
          ┌────────────────────┐
          │     WebRTC         │
          │                    │
          │ Voice Calls        │
          │ Video Calls        │
          │ Media Streams      │
          └────────────────────┘

                    │
                    │ Media Upload
                    ▼
          ┌────────────────────┐
          │     Cloudinary     │
          │                    │
          │ Images             │
          │ Media              │
          │ User Uploads       │
          └────────────────────┘
```

---

# 🧩 Architecture Components

## 1. Frontend — Next.js + TypeScript

The frontend is responsible for the user-facing application.

It handles:

- Authentication UI
- Registration and login
- User profiles
- Anonymous Q&A
- Random matching
- Chat interface
- Friend requests
- Notifications
- Voice calls
- Video calls
- Media uploads
- WebRTC client functionality
- Socket.IO client communication

The frontend is built using **Next.js and TypeScript**.

---

## 2. Backend — Express.js + TypeScript

The backend provides the application's REST API and server-side business logic.

It handles:

- Authentication
- JWT verification
- User management
- Profile management
- Matching logic
- Anonymous Q&A
- Conversations
- Messages
- Friend requests
- Friendships
- Notifications
- Media handling
- Socket.IO events
- WebRTC signaling

The backend is built using **Express.js and TypeScript**.

---

## 3. Database — MongoDB

MongoDB is used as the primary database.

The database can contain collections for:

```text
Users
│
├── Profiles
├── Preferences
├── Authentication data
└── Account settings

Conversations
│
├── Participants
├── Messages
└── Chat metadata

Friendships
│
├── Friend requests
├── Accepted friendships
└── Friendship status

Anonymous Q&A
│
├── Question links
├── Questions
└── Answers

Notifications
│
└── User notifications
```

---

## 4. Real-Time Layer — Socket.IO

Socket.IO provides real-time communication between the frontend and backend.

It can handle:

```text
Messaging
   │
   ├── send_message
   ├── receive_message
   ├── message_read
   └── typing

Presence
   │
   ├── user_online
   ├── user_offline
   └── update_status

Notifications
   │
   ├── friend_request
   ├── friend_accepted
   └── match_found

Calling
   │
   ├── call_request
   ├── call_accepted
   ├── call_rejected
   └── call_ended
```

---

## 5. WebRTC — Voice & Video

WebRTC is responsible for real-time peer-to-peer audio and video communication.

A simplified call flow:

```text
                  User A
                     │
                     │ Call Request
                     ▼
              ┌───────────────┐
              │   Socket.IO   │
              │   Signaling   │
              └───────┬───────┘
                      │
                      │ SDP / ICE
                      │ Candidates
                      ▼
                  User B
                      │
                      │
              ┌───────▼────────┐
              │     WebRTC     │
              │ Peer Connection│
              └───────┬────────┘
                      │
                      ▼
               Audio / Video
```

Socket.IO can exchange signaling information while WebRTC establishes the media connection.

For production environments, STUN/TURN infrastructure may be required depending on network conditions.

---

## 6. Cloudinary — Media Storage

Cloudinary is used for storing and managing user-uploaded media.

The typical flow is:

```text
User
  │
  ▼
Next.js Client
  │
  │ Upload
  ▼
Cloudinary
  │
  │ Media URL
  ▼
Express.js Backend
  │
  ▼
MongoDB
```

---

# 📁 Project Structure

A recommended project structure for After7 is:

```text
after7/
│
├── client/                              # Next.js frontend
│   │
│   ├── app/                             # Next.js App Router
│   │   ├── (auth)/                      # Authentication routes
│   │   ├── (main)/                      # Main application routes
│   │   ├── chat/                        # Chat pages
│   │   ├── profile/                     # Profile pages
│   │   ├── questions/                   # Anonymous Q&A pages
│   │   ├── matching/                    # Matching pages
│   │   ├── friends/                     # Friends pages
│   │   ├── calls/                       # Voice/video call pages
│   │   ├── layout.tsx                   # Root layout
│   │   └── page.tsx                     # Home page
│   │
│   ├── components/                      # Reusable UI components
│   │   ├── ui/                          # Common UI components
│   │   ├── chat/                        # Chat components
│   │   ├── profile/                     # Profile components
│   │   ├── matching/                    # Matching components
│   │   ├── questions/                   # Q&A components
│   │   └── calls/                       # Call components
│   │
│   ├── hooks/                           # Custom React hooks
│   │
│   ├── lib/                             # Utility functions
│   │   ├── api.ts                       # API client
│   │   ├── socket.ts                    # Socket.IO client
│   │   └── utils.ts                     # General utilities
│   │
│   ├── services/                        # Frontend services
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── chat.service.ts
│   │   ├── matching.service.ts
│   │   └── friend.service.ts
│   │
│   ├── types/                           # TypeScript definitions
│   │
│   ├── providers/                       # React context/providers
│   │
│   ├── public/                          # Static assets
│   │
│   ├── styles/                           # Global styles
│   │
│   ├── .env.local                       # Frontend environment variables
│   ├── next.config.ts                   # Next.js configuration
│   ├── tsconfig.json                    # TypeScript configuration
│   └── package.json
│
│
├── server/                              # Express.js backend
│   │
│   ├── src/
│   │   │
│   │   ├── config/                      # Configuration
│   │   │   ├── database.ts              # MongoDB connection
│   │   │   ├── cloudinary.ts            # Cloudinary configuration
│   │   │   └── environment.ts           # Environment configuration
│   │   │
│   │   ├── controllers/                 # Request controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── chat.controller.ts
│   │   │   ├── matching.controller.ts
│   │   │   ├── friend.controller.ts
│   │   │   └── question.controller.ts
│   │   │
│   │   ├── models/                      # MongoDB models
│   │   │   ├── User.ts
│   │   │   ├── Conversation.ts
│   │   │   ├── Message.ts
│   │   │   ├── Friendship.ts
│   │   │   ├── FriendRequest.ts
│   │   │   ├── Question.ts
│   │   │   └── Notification.ts
│   │   │
│   │   ├── routes/                      # REST API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   ├── chat.routes.ts
│   │   │   ├── matching.routes.ts
│   │   │   ├── friend.routes.ts
│   │   │   └── question.routes.ts
│   │   │
│   │   ├── middleware/                  # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── upload.middleware.ts
│   │   │
│   │   ├── services/                    # Business/application services
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   ├── chat.service.ts
│   │   │   ├── matching.service.ts
│   │   │   ├── friend.service.ts
│   │   │   ├── question.service.ts
│   │   │   └── notification.service.ts
│   │   │
│   │   ├── socket/                      # Socket.IO handlers
│   │   │   ├── index.ts
│   │   │   ├── chat.socket.ts
│   │   │   ├── presence.socket.ts
│   │   │   ├── notification.socket.ts
│   │   │   └── call.socket.ts
│   │   │
│   │   ├── types/                       # TypeScript interfaces
│   │   │
│   │   ├── utils/                       # Utility functions
│   │   │
│   │   ├── app.ts                       # Express application
│   │   └── server.ts                    # Server entry point
│   │
│   ├── .env                             # Backend environment variables
│   ├── tsconfig.json                    # TypeScript configuration
│   └── package.json
│
│
├── .gitignore                           # Git ignored files
├── .env.example                         # Environment variable template
├── README.md                            # Project documentation
└── package.json                         # Root package configuration
```

> The exact directory structure may change as the project grows. The structure above represents the recommended organization for the After7 architecture.

---

# 🔄 How After7 Works

## User Journey

```text
┌──────────────┐
│    Sign Up   │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Complete Profile │
└────────┬─────────┘
         │
         ▼
┌────────────────────────────┐
│ Choose Matching Preferences│
└────────────┬───────────────┘
             │
             ▼
┌──────────────────────┐
│   Find Random User   │
└────────────┬─────────┘
             │
             ▼
┌──────────────────────┐
│      Start Chat      │
└────────────┬─────────┘
             │
             ▼
┌──────────────────────┐
│ 7-Day Chat Period    │
└────────────┬─────────┘
             │
             ▼
┌──────────────────────┐
│ Friend Request       │
└────────────┬─────────┘
             │
       ┌─────┴─────┐
       │           │
       ▼           ▼
  Accepted      Declined
       │           │
       ▼           ▼
┌─────────────┐  ┌─────────────┐
│ Voice/Video │  │    Chat     │
│    Calls    │  │  Continues  │
└─────────────┘  └─────────────┘
```

---

# 📋 How It Works

### 1. Sign Up

The user creates an After7 account.

Authentication is handled through the Express.js backend using JWT.

---

### 2. Complete Profile

The user provides profile information and matching preferences.

---

### 3. Find a Match

The matching system searches for suitable users based on the selected preferences.

---

### 4. Start Chatting

Once matched, users can start a private real-time conversation.

---

### 5. Build Trust

Users can communicate during the initial 7-day period.

Friendship functionality remains restricted during this period.

---

### 6. Friend Request

Once the 7-day period has been completed, the friendship request feature becomes available.

---

### 7. Mutual Friendship

If the friend request is accepted:

```text
User A
   │
   │ Friend Request
   ▼
User B
   │
   │ Accept
   ▼
Mutual Friendship
   │
   ├── Voice Call
   └── Video Call
```

---

### 8. Declined Request

If the friend request is declined, users can continue communicating through the available chat functionality.

---

# 🔐 Security & Privacy

Security and privacy are important considerations for After7.

The application is designed around:

- JWT authentication
- Protected backend routes
- Authentication middleware
- Input validation
- CORS configuration
- Anonymous Q&A
- Private conversations
- Controlled friend requests
- Controlled voice/video access
- Secure media storage
- Environment-based secret management

### Important

Never commit sensitive credentials to Git.

The following files should remain private:

```text
.env
.env.local
.env.production
```

Use `.env.example` to document required environment variables without exposing real secrets.

---

# 🔑 Environment Variables

## Backend

Create:

```text
server/.env
```

Example:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/after7

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d

# Session
SESSION_SECRET=your_session_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Socket.IO
SOCKET_CORS_ORIGIN=http://localhost:3000
```

---

## Frontend

Create:

```text
client/.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_APP_NAME=After7
```

Only variables prefixed with `NEXT_PUBLIC_` should be exposed to the browser.

Never put private secrets in `NEXT_PUBLIC_` environment variables.

---

# 🚀 Getting Started

## Prerequisites

Before running After7, make sure you have:

- Node.js 18+
- npm, yarn, or pnpm
- MongoDB
- Git
- Cloudinary account

For production voice/video calling, you may also need STUN/TURN infrastructure.

---

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/after7.git

cd after7
```

---

## 2. Setup the Backend

```bash
cd server

npm install
```

Create your backend environment file:

```text
server/.env
```

Configure the required environment variables.

Then start the development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 3. Setup the Frontend

Open another terminal:

```bash
cd client

npm install
```

Create:

```text
client/.env.local
```

Configure the frontend environment variables.

Then start Next.js:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:3000
```

---

# 🗄️ Database Setup

After7 uses MongoDB.

You can use either:

### Local MongoDB

```env
MONGODB_URI=mongodb://localhost:27017/after7
```

Or MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/after7
```

Make sure the MongoDB server is running before starting the backend.

---

# 🧪 API Testing

The Express.js backend exposes REST APIs for different parts of the application.

## Authentication

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

---

## Users

```text
GET  /api/users/profile
PUT  /api/users/profile
GET  /api/users/preferences
PUT  /api/users/preferences
```

---

## Matching

```text
POST /api/matching/find
GET  /api/matching/history
```

---

## Messaging

```text
GET  /api/messages/:userId
POST /api/messages/:userId
GET  /api/messages/search
```

---

## Friends

```text
POST   /api/friends/request/:userId
PUT    /api/friends/accept/:userId
PUT    /api/friends/decline/:userId
DELETE /api/friends/:userId
```

---

## Anonymous Q&A

```text
POST /api/qa/links
GET  /api/qa/links/:linkId
POST /api/qa/questions
```

> API routes may change as the backend implementation evolves. Treat the actual Express route definitions as the source of truth.

---

# 🔌 Socket.IO Events

## Connection

```text
connect
disconnect
```

---

## Messaging

```text
send_message
receive_message
typing
message_read
```

---

## Presence

```text
user_online
user_offline
update_status
```

---

## Notifications

```text
friend_request
friend_accepted
match_found
```

---

## Calling

```text
call_request
call_accepted
call_rejected
call_ended
```

---

# 📡 Real-Time Chat Flow

```text
┌──────────────┐
│    User A    │
└──────┬───────┘
       │
       │ send_message
       ▼
┌──────────────┐
│   Socket.IO  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Express/Node │
│    Server    │
└──────┬───────┘
       │
       │ validate / process
       ▼
┌──────────────┐
│   MongoDB    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Socket.IO  │
└──────┬───────┘
       │
       │ receive_message
       ▼
┌──────────────┐
│    User B    │
└──────────────┘
```

---

# 📤 Media Upload Flow

```text
┌──────────────┐
│     User     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Next.js    │
│   Frontend   │
└──────┬───────┘
       │
       │ Upload
       ▼
┌──────────────┐
│  Cloudinary  │
└──────┬───────┘
       │
       │ Media URL
       ▼
┌──────────────┐
│  Express.js  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   MongoDB    │
└──────────────┘
```

---

# 📦 Available Scripts

## Frontend

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the Next.js production server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run type-check
```

Runs TypeScript type checking.

---

## Backend

```bash
npm run dev
```

Starts the Express.js development server.

```bash
npm run build
```

Compiles the TypeScript backend.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run type-check
```

Runs TypeScript type checking.

> Available scripts depend on the scripts defined in each application's `package.json`.

---

# 🎯 Project Goals

The main goals of After7 are:

- Build a modern youth-focused social platform
- Enable anonymous Q&A
- Encourage authentic conversations
- Enable random user discovery
- Build trust through gradual communication
- Provide real-time private messaging
- Provide controlled friendship functionality
- Enable voice and video communication
- Maintain strong privacy and security practices
- Create a scalable application architecture

---

# 🛡️ Safety & Moderation

Because After7 involves anonymous interaction and communication between users, safety and moderation are important.

Potential safety features include:

- User reporting
- User blocking
- Spam prevention
- Rate limiting
- Content moderation
- Anonymous Q&A filtering
- Abuse detection
- Account restrictions
- Community guidelines
- Moderation tools
- Safety notifications

These features should be implemented and tested before production deployment.

---

# 🚧 Future Enhancements

The following features are planned or may be considered in future versions:

- [ ] Advanced content moderation
- [ ] AI-assisted moderation
- [ ] Improved anonymous Q&A filtering
- [ ] User reporting and blocking
- [ ] Improved matching algorithms
- [ ] Better recommendation system
- [ ] Group conversations
- [ ] Story/status functionality
- [ ] Push notifications
- [ ] Mobile application
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Advanced privacy controls
- [ ] Improved scalability
- [ ] Advanced analytics
- [ ] Better WebRTC infrastructure

---

# 📊 Environment Variables Checklist

## Backend

```text
[ ] PORT
[ ] NODE_ENV
[ ] MONGODB_URI
[ ] JWT_SECRET
[ ] JWT_EXPIRY
[ ] SESSION_SECRET
[ ] CLOUDINARY_CLOUD_NAME
[ ] CLOUDINARY_API_KEY
[ ] CLOUDINARY_API_SECRET
[ ] SOCKET_CORS_ORIGIN
```

---

## Frontend

```text
[ ] NEXT_PUBLIC_API_URL
[ ] NEXT_PUBLIC_SOCKET_URL
[ ] NEXT_PUBLIC_APP_NAME
```

---

# 🌱 Development Workflow

A recommended development workflow:

```text
Create Feature
      │
      ▼
Create Branch
      │
      ▼
Implement Frontend
      │
      ▼
Implement Backend
      │
      ▼
Test REST APIs
      │
      ▼
Test Socket.IO
      │
      ▼
Test WebRTC
      │
      ▼
Run TypeScript Checks
      │
      ▼
Run Lint
      │
      ▼
Commit Changes
      │
      ▼
Push Branch
      │
      ▼
Create Pull Request
```

---

## 📄 License

After7 is **not an open-source project**.

The source code is publicly available for transparency, evaluation,
learning, testing, and bug reporting. Developers are welcome to inspect
the code and report bugs or security vulnerabilities.

However:

- ❌ Pull requests are not accepted
- ❌ Public forks are not permitted
- ❌ Redistribution is not permitted
- ❌ Commercial use is not permitted
- ❌ Modified/derivative versions may not be distributed
- ❌ Code contributions require explicit written permission

For complete terms, see the [`LICENSE`](LICENSE) file.

Copyright © 2026 After7. All rights reserved.

---

# ⚠️ Production Notes

Before deploying After7 to production:

- Use HTTPS
- Never expose private environment variables
- Never commit `.env` files
- Configure MongoDB authentication
- Use appropriate MongoDB access controls
- Implement API rate limiting
- Configure CORS correctly
- Validate all user input
- Implement proper error handling
- Secure JWT configuration
- Configure secure cookies if used
- Configure STUN/TURN servers for WebRTC when required
- Implement abuse prevention
- Implement user reporting and blocking
- Add application logging
- Add monitoring and alerting
- Regularly update dependencies
- Perform security audits
- Test authentication and authorization thoroughly

---

# 📞 Support

For bugs, feature requests, questions, or suggestions:

1. Open an issue on GitHub.
2. Provide a clear description of the problem or suggestion.
3. Include relevant logs or reproduction steps when applicable.

---

# ❤️ After7

After7 is built around a simple idea:

```text
        ASK
         ↓
     DISCOVER
         ↓
       CHAT
         ↓
   BUILD TRUST
         ↓
      CONNECT
```

**Anonymous interaction.  
Authentic conversations.  
Gradual connections.**

---

**Made with ❤️ for meaningful connections and privacy-conscious social interaction.**
