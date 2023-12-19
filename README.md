# modak
This project is a React Native application based on my custom boilerplate: Boilerplate React Native 071.

Getting Started
To get started with this project, follow these steps:

Clone the Repository:

***
git clone https://github.com/iviveros-code/modak
Install Dependencies:
***

Navigate to the project directory and run:

***
yarn
For iOS, you also need to install pod dependencies. In the ios directory, run:
cd ios && pod install && cd ..
***


Start the Application:

For iOS:

In one terminal window, start the React Native packager:

yarn start --reset-cache
yarn ios:dev

***
For Android:

yarn start --reset-cache
yarn android:dev

***

***
Development Branch
The functional application can be found in the development branch. Please switch to this branch to access the latest working version of the application. 

git checkout development

***


***
Disclaimer

The native module is located in the feat/calendar branch. For this module, I used Fabric Native Components. Despite following the documentation, there are some unresolved errors due to time constraints. This part of the project is still under development and might not function as expected. git checkout feat/calendar
For android :
yarn start --reset-cache
cd android && ./gradlew generateCodegenArtifactsFromSchema
yarn android:dev

For iOS:
yarn start --reset-cache
cd ios && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
yarn ios:dev

***

