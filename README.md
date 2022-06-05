# Single Page Portfolio Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Alt Text](https://media.giphy.com/media/j0ioLKtXREMqa8AxjC/giphy.gif)


## Description
A single page application portfolio where a user can navigate to different sections of my page via navigation bar. This was accompished by capturing what the user selects in if and else conditional statements. In the App.js there is the PortfolioContainer component and Footer component. These components stay present on the application. The NavTab component is the child of the PortfolioContainer component which is also the parent of the child components: 'About' , 'Contact' , 'Skills' , 'Work'. If the user selects 'About' section in the navigation menu , the 'About' component gets passed through a function that handles the page rendering, and sets the page to display the About component material (using the useState hook). Single page applications create the illusion of a server based application with multiple pages; however, it is purely just one parent component orchistrating which components to be rendered. 

 ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## installation
  npm i to initiate the packages in the package.json file 

  
  ## License 
  This project is license under MIT 

  ## Contributing
  The user must clone the repo, initiate the packages, and test the server through npm script "npm start" 

  ## Tests
  npm start 

  ## Questions
  If you have any questions about this repository, please contact me via kalaitzidispaul@gmail.com. You can view more of my projects at https://github.com/paulkalait

## Github-Pages
https://paulkalait.github.io/react-portfolio-single/