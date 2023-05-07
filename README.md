# Ciao Chow
This is a Expo React Native app that requires the use of --legacy-peer-deps to install dependencies.

## Getting Started
### Clone the repository
Install Expo CLI by running `npm install -g expo-cli`
Install project dependencies with `npm install --legacy-peer-deps`
Start the project with `expo run ios` or `expo start`

## Project Structure
/application - contains application business logic like app level single source state context
  - contextProvide.js - contains single source of state truth logic for the application
  - I opted to use this instead of Redux because the application is light
/services - contains api logic and external interface logic
  - api.js - contains api interfacing logic
  - mockdata.js - contains mockdata for use in building and testing app
/ui - contains all view and markup code
  - /components - Contains reusable UI components
  - /screens - Contains the main screens of the app
/assets - Contains image and font assets

## Technologies Used
React Native - A framework for building native mobile apps using React.
Expo - A set of tools and services for building and deploying universal Expo apps.
