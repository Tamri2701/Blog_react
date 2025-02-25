# Inkwell Insights

## Overview
Inkwell Insights is a React-based blogging platform that allows users to browse, create, and interact with blog posts. The application includes user authentication, category-based filtering, and a smooth navigation experience.

## Features
- **User Authentication**: Login, Register, and Logout functionality.
- **Dynamic Routing**: Using `react-router-dom` for seamless navigation.
- **Blog Categories**: Filter blogs based on category.
- **Responsive Design**: Adaptive UI for various screen sizes.
- **Interactive UI**: Scroll-based header behavior and animations.

## Installation
To set up the project locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine
- React.js environment setup

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/inkwell-insights.git
   ```
2. Navigate to the project directory:
   ```sh
   cd inkwell-insights
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
   The app will run on `http://localhost:3000/`.

## Project Structure
```
Inkwell-Insights/
│-- src/
│   │-- components/
│   │   │-- header/
│   │   │-- pages/
│   │-- Assets/
│   │-- Data.js
│   │-- App.js
│-- public/
│-- package.json
│-- README.md
```

## Technologies Used
- React.js
- React Router
- CSS (for styling)
- React Icons

## Available Routes
| Route        | Component      | Description |
|-------------|--------------|-------------|
| `/`         | `Login`       | User login page |
| `/home`     | `Home`        | Main landing page |
| `/details/:id` | `Details` | Blog details page |
| `/create`   | `Create`      | Blog creation page |
| `/account`  | `Account`     | User account details |
| `/profile`  | `Profile`     | User profile page |
| `/card/:category` | `Card` | Filtered blog category |
| `/about`    | `Aboutus`     | About page |
| `/register` | `Register`    | User registration page |
| `/contact`  | `Contact`     | Contact page |
| `/blog`     | `Trending`    | Trending blog section |
| `/logout`   | `Logout`      | Logout page |

## Contributing
Feel free to fork the repository and make contributions. Create a pull request with your proposed changes.




