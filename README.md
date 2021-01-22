# Deep ESG Technical Challenge

## Introduction
Welcome to a repository made to compete on the Deep ESG selective process. On this project there are two major programs, the back-end represented by an API made in node.js with express and the front-end, made with the Vue framework. This program uses the [HG Brasil](https://www.hgbrasil.com) API service that has the capacity of finding any registered city in the world and give it's weather status, along with a front-end device that organizes the temperature, the humidity and the wind speed, permiting you to save multiple cities (maximum of five) and compare them with each other in a table. To make the requests to the API, write the name of the city and press enter.


## Setting up the project
### Initial config
For this project, we will be using [npm](https://www.npmjs.com/get-npm) to install all the necessary modules, so you will have to download it if you don't already have installed.

### Back-end

```
cd api
npm install
```

First of all, you have to create a new account (or use a existing one) in [HG Brasil](https://www.hgbrasil.com) to create a API key and define it as the ambient variable below, allowing you a better usage of the HG API.

```
export HG_KEY=yourkeyhere
```

### Front-end

```
cd frontend
npm install
```

Also, you may find useful to update your npm using

```
npm install npm@latest -g
```

## Running the project

### Back-end

```
cd api
node server.js
```

### Front-end

```
cd frontend
npm run serve
```

## Disclaimer
Both API and the frontend have been tested in linux ubuntu and windows, but none of the macOS versions were tested. With that said, you may use it on macOS, but at your own risk


## Author

* Gabriel Ferreira Silva - High school student