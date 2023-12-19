# modak
This project is a React Native application based on my custom boilerplate: Boilerplate React Native 071.

Getting Started
To get started with this project, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/iviveros-code/modak
Install Dependencies:

Navigate to the project directory and run:

bash
Copy code
yarn
For iOS, you also need to install pod dependencies. In the ios directory, run:

bash
Copy code
pod install
Start the Application:

For iOS:

In one terminal window, start the React Native packager:

bash
Copy code
yarn start --reset-cache
In a new terminal window, run the application:

bash
Copy code
yarn ios:dev
For Android:

In a new terminal window, run the application:

bash
Copy code
yarn android:dev
Development Branch
The functional application can be found in the development branch. Please switch to this branch to access the latest working version of the application. git checkout development

Disclaimer
The native module is located in the feat/calendar branch. For this module, I used Fabric Native Components. Despite following the documentation, there are some unresolved errors due to time constraints. This part of the project is still under development and might not function as expected. git checkout feat/calendar

