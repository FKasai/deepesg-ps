# Deep ESG Technical Challenge

## Introduction
Welcome to a repository made to compete on the Deep ESG selective process. On this project there are two major programs, the back-end represented by an API made in node.js with express and the front-end, made with the Vue framework. This program uses the [HG Brasil](https://www.hgbrasil.com) API service that has the capacity of finding any registered city in the world and give it's weather status, along with a front-end device that organizes the temperature, the humidity and the wind speed, permiting you to save multiple cities (maximum of five) and compare them with each other in a table.


## Setting up the project
### Back-end

```
cd api
npm install
```

First of all, you have to create an ambient variable that let you use an HG API key.

```
export HG_KEY=yourkeyhere
```

### Front-end

```
cd frontend
npm install
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