# Hacker News Client

A lightweight, responsive Hacker News client built with modern web technologies. This project allows users to browse the latest stories from Hacker News, view detailed information about each story, and explore comments in a clean, intuitive interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Top Stories with Infinite Scroll:** Browse Hacker News top stories with key details such as title, author, points, and time. The list uses a cursor-based pagination algorithm for infinite scrolling.
- **Story Details:** Click on a story to view more information, including the story's URL and user nested comments. Comments are loaded using an offset-based pagination algorithm.
- **Responsive Design:** Optimized for both mobile and desktop experiences using Tailwind CSS.
- **Clean UI:** Simple and intuitive design to enhance user experience.

## Tech Stack

- **GraphQL & Data Fetching:** Apollo GraphQL, Axios
- **Styling:** Tailwind CSS
- **Framework:** React (assumed based on the project structure)
- **Pagination Algorithms:**
  - _Top Stories:_ Cursor-based pagination for infinite scrolling.
  - _Story Details:_ Offset-based pagination for nested comments.

## Demo

You can view a live demo of the project here: [Live Demo](https://hacker-news-client-3as6.vercel.app/)

# Environment Setup

This project fetches data from a custom Hacker News API using GraphQL. Set up your environment variable by creating a .env file in the root directory with the following content:

```bash
  NEXT_PUBLIC_GRAPHQL_URL=https://news-hn.site/graphql
```

This ensures your client application uses the correct GraphQL endpoint.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dnguyen316/hacker-news-client.git
   ```

2. **Navigate to the project directory:**

   ```bash
    cd hacker-news-client
   ```

3. **Install dependencies:**

   ```bash
    npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application should now be running at http://localhost:3000.

# Usage

- Browse Stories: On the home page, you'll see a list of Hacker News top stories loaded via an infinite scroll mechanism.
- View Details: Click on a story title to see detailed information, including the story's URL and nested comments.
- Navigation: Use the intuitive navigation to move between different sections of the app.

# Project Structure

The project follows a straightforward structure. Here’s an overview:

```graphql
hacker-news-client/
├── .vscode/             # VS Code workspace settings
├── actions/             # Contains reusable server actions
├── app/                 # Main application logic and Next.js pages
├── components/          # UI components used across the application
├── graphql/             # GraphQL queries and API interactions
├── hooks/               # Custom React hooks for state and effects management
├── lib/constants/       # Application constants and shared variables
├── providers/           # Context providers for global state management
├── public/              # Static assets like images and icons
├── .eslintrc.json       # ESLint configuration file
├── .gitignore           # Git ignored files and folders
├── README.md            # Project documentation
├── TODOS.md             # Development tasks and planned features
├── next.config.ts       # Next.js configuration file
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Package lock file for dependencies
├── postcss.config.mjs   # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

# API Reference

This project uses the Hacker News API to fetch data such as top stories, story details, and comments. Refer to the API documentation for more details on available endpoints and data structures.

# Contributing

Contributions are welcome! If you'd like to improve the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request describing your changes.
6. Please ensure your code adheres to the existing style and includes relevant tests if applicable.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

```pgsql
  Feel free to update or adjust any sections as needed to better fit your project's specifics.
```
