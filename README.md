# Deep ESG Technical Challenge

## Introduction
Welcome to a repository made to compete on the Deep ESG selective process. On this project there are two major programs, the back-end represented by an API made in node.js with express and the front-end, made with the Vue framework. This program uses the [HG Brasil](https://www.hgbrasil.com) API service that has the capacity of finding any registered city in the world and give it's weather status, along with a front-end device that organizes the temperature, the humidity and the wind speed, permiting you to save multiple cities (maximum of five) and compare them with each other in a table. To make the requests to the API, write the name of the city and press enter.


## Setting up the project
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

## Author

* Gabriel Ferreira Silva - High school student