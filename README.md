
# Weather App Dashboard

This is a simple weather app dashboard built using ReactJS and TypeScript. The application utilizes functional components, Redux for state management, and styled components with Tailwind CSS for styling.


## Features

Here are some of the key features of this weather app dashboard:

Real-time data: The app uses the OpenWeatherMap API to fetch real-time weather data for the searched city.

Autocomplete search: The app has a built-in autocomplete search feature that suggests city names as the user types.

Debounce search: The app uses a debounce function to prevent multiple API requests for the same search query.

Mobile responsive: The app is designed to be mobile responsive and can be easily viewed on devices of different screen sizes.

Dynamic weather icons: The app displays dynamic weather icons that change depending on the current weather conditions.



## File and Folder Structure

To keep the code organized and maintainable, I have used a specific file and folder structure for this project. Here's a brief overview of the structure:

src/

 assets/        # Contains all React images, icon
 
 components/    # Contains all React components

 helpers/       # Contains all dependency function 

 hooks/         # Contains all custom hooks 

 redux/         # Contains Redux store, actions, and reducers
 
 styles/        # Contains global styles-component
 
 App.tsx        # Entry point of the application

 index.tsx      # Renders the React app

 types.d.ts 

## SOLID Principles



In this project, I have made an effort to follow the SOLID principles to ensure that the code is clean, scalable, and maintainable. Here are some ways I have applied the SOLID principles in this project:

1. Single Responsibility Principle (SRP): Each component in the application has a single responsibility, making the code easy to understand and maintain.

2. Open/Closed Principle (OCP): The application is designed to be open for extension but closed for modification, allowing for new features to be added without altering the existing code.

3. Liskov Substitution Principle (LSP): The application follows the LSP by ensuring that all components are interchangeable and can be used without affecting the functionality of the application.

4. Interface Segregation Principle (ISP): The application follows the ISP by keeping interfaces small and focused on specific functionality, making the code more modular and easier to understand.

5. Dependency Inversion Principle (DIP): The application follows the DIP by using abstractions to reduce dependencies between components, making the code more flexible and easier to maintain.


## Installation
To run the application, follow these steps:

Clone the repository to your local machine.

Install dependencies using npm install.

Obtain an API key from the OpenWeatherMap API website.

Create a .env file at the root of the project and add your API key as REACT_APP_API_KEY=<your_api_key>.

Run the application using npm start.

    
## Appreciation

Thank you for taking the time to check out my weather app dashboard! I hope you find it useful and informative. If you have any feedback or suggestions for improvement, please feel free to reach out to me.

Contact
LinkedIn: linkedin.com/in/niteen-phulekar
