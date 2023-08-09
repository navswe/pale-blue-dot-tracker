# Pale Blue Dot Tracker

## Description

The **Pale Blue Dot Tracker** is a React application designed to provide users with real-time tracking and visualization of natural events such as wildfires, volcanoes, and severe storms using data from the NASA EONET API. The app utilizes the Google Maps API for interactive map displays. The integration of npm packages including `google-map-react`, `@iconify`, and `use-supercluster` enhances the functionality and user experience of the application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone this repository
2. Navigate to the project directory: `cd pale-blue-dot-tracker`
3. Install dependencies: `npm install`

## Usage

1. Obtain API keys from NASA EONET API (optional) and Google Maps API.
2. Create a `.env` file in the project root and add your API keys:

REACT_APP_NASA_API_KEY=**your-nasa-api-key**
REACT_APP_GOOGLE_MAPS_API_KEY=**your-google-maps-api-key**

3. Run the development server: `npm start`
4. Access the app in your browser at: `http://localhost:3000`

## Features

- Real-time tracking of natural events using NASA EONET API data: https://eonet.gsfc.nasa.gov/api/v3/events
- Visualization of events on an interactive map powered by Google Maps API: https://developers.google.com/maps/documentation
- Custom markers and icons for different types of natural events using `@iconify`: https://www.npmjs.com/package/@iconify/icons-emojione
- Clustered map markers for improved performance using `use-supercluster` React hook: https://www.npmjs.com/package/use-supercluster

## Technologies

- React
- npm packages:
- `google-map-react`
- `@iconify`
- `use-supercluster`
- NASA EONET API
- Google Maps API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## License

This project is licensed under the [MIT License](LICENSE).
