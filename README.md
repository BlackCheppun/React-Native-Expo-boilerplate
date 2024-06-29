# React Native Boilerplate with Expo Go, Redux, and Axios

Welcome to the React Native Expo Boilerplate ! This project is a starter template that uses Expo Go, Redux, and Axios. It also includes a pre-configured folder structure to help you get started quickly with your React Native application development.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features
- **Typescript**: Strongly typed JavaScript for better code quality and maintainability.
- **Expo Go**: Leverage the power of Expo for rapid development and deployment.
- **Redux**: State management made easy with Redux.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Ready-to-Use Folder Structure**: Pre-configured folder structure to organize your project efficiently.

## Folder Structure

The folder structure of this boilerplate is organized as follows:

```
.
          
|── src
|    ├── assets                # Assets such as images, fonts, etc.
|    ├── components            # Reusable components
|    ├── config                # config files for Axios, Firebase ... etc
|    |      ├── Axios.ts       # Axios client configuration        
|    ├── navigation            # Navigation configuration
|    ├── redux                 # Redux related files (actions, reducers, store)
│    |      ├── SLices         # Redux Slices, set up slices, and correspondent reducers
│    |      └── store.ts       # Redux store configuration
|    ├── screens               # Application screens
|    ├── services              # Services (e.g., API calls)
|    ├── types                 # All of your interfaces/types/colors..etc , that you will configure and use.
|    └── utils                 # A bunch of functions that are not specific to any context/usecase, such as timeformatters, email validation ... etc.
├── App.tsx                    # Entry point of the application
└── package.json               #  Project dependencies and scripts
```

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/BlackCheppun/React-Native-Expo-boilerplate
   cd react-native-boilerplate
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Expo development server:
   ```sh
   npm start
   ```

## Usage

After starting the development server, you can use the Expo Go app to scan the QR code and run the app on your physical device, or you can use an emulator/simulator for Android or iOS.

### Running on Android Emulator

1. Make sure you have Android Studio installed and set up.
2. Open Android Studio and start an Android Virtual Device (AVD).
3. In the terminal, run:
   ```sh
   npm run android
   ```

### Running on iOS Simulator

1. Make sure you have Xcode installed and set up.
2. Open Xcode and start an iOS Simulator.
3. In the terminal, run:
   ```sh
   npm run ios
   ```

Feel free to modify this template to better suit your project's specific needs.
