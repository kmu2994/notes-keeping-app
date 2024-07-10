[![Deploy to ECS](https://github.com/Yurui-Feng/notes-app-frontend/actions/workflows/cd.yml/badge.svg)](https://github.com/Yurui-Feng/notes-app-frontend/actions/workflows/cd.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Notes App: Your Personal Note-Taking Solution

Introducing Notes App, a modern, full-stack note-taking web application that seamlessly integrates a React frontend with a robust backend API. It has been specifically designed to offer an intuitive, responsive user experience combined with a secure, high-performance back-end.

**Features:**

- **Frontend**: Built using the React.js framework, the user interface is both dynamic and interactive. It leverages components like StickyNote2Icon from the MUI library for visually pleasing elements and supports Google authentication for secure sign-ins.

- **Backend**: Developed to handle the core functionality of note storage, retrieval, and user authentication. It integrates seamlessly with the frontend, ensuring efficient data processing and transfer.
  - Repository: [https://github.com/Yurui-Feng/notes-app-backend](https://github.com/Yurui-Feng/notes-app-backend)

- **Deployment**: The application utilizes a multi-stage Docker build process for optimized deployment. With the combination of Node.js and NGINX, it ensures that the application is both lightweight and performant.

**Docker Deployment Highlights**:
- Uses the Node 18-alpine image for a lightweight and efficient build.
- Employs NGINX via the stable-alpine image, offering high performance and stability for serving the application.

## Notes App Frontend

This repository contains the frontend code for the Notes App, a web application for creating and managing notes. The frontend is built using React and it interacts with a backend API to manage user authentication and notes storage.
  You can add a screenshot of your app here

## Features

- **Google Authentication**: Users can sign in using their Google accounts.
- **Add, Delete Notes**: Create new notes and remove old ones with a simple user interface.
- **Modern UI**: Beautifully designed with responsive UI components.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 recommended)
- [npm](https://npmjs.com/)

## Local Development

1. Clone the repository:
   ```sh
   git clone https://github.com/Yurui-Feng/notes-app-frontend.git
   cd notes-app-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

Visit `http://localhost:3000` in your browser.

## Docker Deployment

The project comes with a Dockerfile that bundles the app with Nginx for production deployment.

1. Build the Docker image:
   ```sh
   docker build -t notes-app-frontend .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 80:80 notes-app-frontend
   ```

Now, the app should be accessible at `http://localhost`.

## Main Components

### Header Component

The header component displays the application title and provides options for users to either login using Google authentication or logout from the application.

```jsx
<Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} backendUrl={backendUrl} />
```

## Live Demo

Visit the live demo of the app at: [https://notesapp.fuyuri.com/](https://notesapp.fuyuri.com/)

## Backend Repository

For the backend code and API details, check out the backend repository: [notes-app-backend](https://github.com/Yurui-Feng/notes-app-backend)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Remember to add a screenshot of your app to the repository and reference it in the README (`screenshot.png` in the example above). This will give visitors an immediate visual understanding of what your app looks like.
