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
  ├── public/
  │   └── index.html         # The main HTML file
  ├── src/
  │   ├── components/        # Reusable UI components
  │   │   ├── StoryList.tsx   # Component to render list of stories with infinite scroll
  │   │   ├── StoryItem.tsx   # Component for individual story items
  │   │   └── StoryDetail.tsx # Component to display story details and nested comments
  │   ├── App.tsx             # Main application component
  │   └── index.tsx           # Entry point for the React application
  ├── package.json           # Project dependencies and scripts
  └── README.md              # Project documentation
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
