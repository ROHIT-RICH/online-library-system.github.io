# Online Library System

## Description
This is a React-based Online Library System where users can browse books, view book details, and add new books. The application includes features such as dynamic routing, category-based filtering, and mock data management.

## Features
- **Home Page**: Displays categories and a list of popular books.
- **Browse Books**: Users can filter books by category or search by title or author.
- **Book Details**: Displays detailed information about a selected book.
- **Add Book**: A form to add new books to the library.
- **404 Page**: A custom page for undefined routes.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ROHIT-RICH/online-library-system.github.io
   ```
2. Navigate to the project directory:
   ```bash
   cd online-library-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start/npm run dev
   ```
   or
   ```bash
   yarn start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Running the Application with Mock Data
The application uses mock data to simulate books in the library. You can view popular books on the Home Page or browse all books by category or search filters.

### Build for Production
To create a production build, run:
```bash
npm run build
```
or
```bash
yarn build
```

The build files will be located in the `build/` directory.

### Project Structure
- **src/components/**: Contains reusable React components like `HomePage`, `BrowseBooks`, `BookDetails`, `AddBook`, and `NotFound`.
- **src/redux/**: Contains the Redux store and slices to manage state.
- **src/index.js**: The entry point for the React application.
- **src/App.js**: Contains the main routes for the application.
- **src/index.css**: Global styles for the application.


                                                      ### ENJOY ###
