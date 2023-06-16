# React Native TypeScript Starter

Welcome to the React Native TypeScript Starter repository! This starter kit provides a solid foundation for building cross-platform mobile applications using React Native and TypeScript.

## Features

- React Native (latest version)
- TypeScript (configured and ready to use)
- Expo (optional, can be ejected)
- Navigation (React Navigation)
- Code linting (ESLint)
- Pre-configured directory structure

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your machine:

- Node.js (version 14.X.X)
- NPM (version 9.X.X) or Yarn (version 9.X.X)
- Expo CLI (optional, version X.X.X)

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/deginmulbah/react-native-typescript-starter.git
```

2. Change into the project's directory:

```
cd react-native-typescript-starter
```

3. Install the project dependencies:

```
npm install
```
or
```
yarn install
```

## Usage

To start the development server and run the application on your device/emulator, use the following commands:

```
npx expo start
```

This will launch the Metro Bundler and provide you with options to run the app on different platforms (iOS, Android) or in a web browser (if using Expo).

## Project Structure

The project structure follows a modular approach, making it easier to manage and scale your application. Here's a high-level overview of the directories:

- `src`: Contains the main source code of the application.
  - `components`: Reusable UI components.
      - `Block`
      - `Button`
      - `Chechbox`
      - `Image`
      - `Input`
      - `Switch`
      - `Text`
   - `constants`:
        - `dark`: Dark theme
        - `light`: Light theme
        - `theme`: App theme
        - `regex`: regular expressions    
        - `types`: types declear for components and theme
           - `components`: types declearation for components
           - `theme`: types declearation for theme
  - `navigation`: Configuration and setup of navigation.
  - `utils`: Utility/helper functions.
- `assets`: Images, fonts, and other static assets.
- 
Feel free to modify and adapt the structure to suit your project's needs.

# File doc

## useData
The given file is a TypeScript module that exports a `DataProvider` component and a `useData` custom hook. It also creates a `DataContext` using React's `createContext` for managing and sharing data within the application.

The purpose of this file is to provide a data management context using React's context API. It includes functionality related to managing a dark mode theme using the `isDark` state, handling the toggling of the dark mode with the `handleIsDark` function, and setting the theme based on the `isDark` state using the `setTheme` function.

The `DataProvider` component is responsible for initializing and managing the application's data context. It utilizes React's `useState` and `useEffect` hooks to handle the initialization and updates of the dark mode state. It also utilizes the `@react-native-async-storage/async-storage` package for persisting the dark mode preference.

The `useData` hook allows components within the application to access the data context and provides type checking for the available data and functions through the `IUseData` interface.

This module can be used as a provider component at the top-level of a React Native application to manage and provide data-related functionalities, such as dark mode theme settings, to its child components.

Feel free to modify and extend this file according to your specific application requirements.

## useTheme
The provided file is a TypeScript module that exports a `ThemeProvider` component, a `ThemeContext`, and a custom hook `useTheme`. 

The `ThemeProvider` component is responsible for providing the theme context to its child components. It receives the `theme` and `setTheme` properties as optional parameters through the `IThemeProvider` interface. By default, it uses the `light` theme from the `../constants/` module. The `setTheme` function is an empty function by default. It wraps the `children` components with the `ThemeContext.Provider` and passes the `theme` and `setTheme` values through the context.

The `ThemeContext` is created using React's `createContext` and initializes with a default theme value of `light` and an empty `setTheme` function.

The `useTheme` custom hook allows components to access the current theme value from the `ThemeContext`. It uses React's `useContext` hook to retrieve the `theme` value from the `ThemeContext` and returns it.

This module can be used to manage and provide theme-related functionalities to components within a React application. The `ThemeProvider` component should be placed at the top-level of the application to wrap its child components and make the theme accessible throughout the component hierarchy. The `useTheme` hook can be used in any component to access the current theme value.

Feel free to modify and expand upon this module according to your specific application's theme management requirements.
## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

This starter kit was inspired by the awesome work of the React Native and TypeScript communities. Special thanks to all the contributors who have helped make this project better.

## Contact

If you have any questions, feel free to reach out to the project maintainers:

- Maintainer: [deginmulbah](mailto:jenkinsmulbah6@gmail.com)

Thank you for using the React Native TypeScript Starter! Happy coding!
