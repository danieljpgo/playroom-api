<h1 align="center">
   <img
      alt="Playroom"
      title="Playroom"
      src=".github/logo.svg"
      width="150px" />
   &nbsp;<div align="center">Playroom</div>
</h1>
 
<h1> Playroom Api </h1>

<p align="left">
   <a href="https://github.com/danieljpgo">
      <img
         alt="author"
         src="https://img.shields.io/badge/author-danieljpgo-0081A7?style=flat-square&labelColor=3f3d56"
      />
   </a>
   <img
      alt="languages"
      src="https://img.shields.io/github/languages/count/danieljpgo/playroom-api?color=0081A7&style=flat-square&labelColor=3f3d56"
   />
   <a href="https://github.com/danieljpgo/playroom-api/stargazers">
      <img
         alt="stars"
         src="https://img.shields.io/github/stars/danieljpgo/playroom-api?color=0081A7&style=flat-square&labelColor=3f3d56"/>
   </a>
   <a href="https://github.com/danieljpgo/playroom-api/network/members">
      <img
         alt="forks"
         src="https://img.shields.io/github/forks/danieljpgo/playroom-api?color=0081A7&style=flat-square&labelColor=3f3d56"/>
   </a>
   <a href="https://github.com/danieljpgo/playroom-api/graphs/contributors">
      <img
         alt="contributors"
         src="https://img.shields.io/github/contributors/danieljpgo/playroom-api?color=0081A7&style=flat-square&labelColor=3f3d56"/>
   </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-0081A7?style=flat-square&labelColor=3f3d56">
</p>

> A marketplace for finding and registering toy donation places. :jigsaw:

 &nbsp;

<p align="center">
   <a href="#memo-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#rocket-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#computer-integrations">Integrations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#man_technologist-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#runner-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#page_with_curl-license">License</a>
</p>

<h1 align="center">
   <img
      alt="kids jumping rope"
      title="Playroom"
      src=".github/backend-final.gif"
      width="600px" />
</h1>

## :memo: Project
Project aims to list toy donation companies and institutions, offering an easily accessible platform both for finding donation points and for registering new entities.

## :rocket: Features
The main features of the project are:
- **Create** and **read** donations points.
- **Upload** images of donations points.
- **Seeding** donation item categories.
- **Read** donation item categories.

## :computer: Integrations
This project is part of the **Playroom** system, the other projects are located at:
- [Playroom Web](https://github.com/danieljpgo/playroom-web)
- [Playroom App](https://github.com/danieljpgo/playroom-app)

## :man_technologist: Technologies
The main technologies used to develop the project were:
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [Joi](https://hapi.dev/module/joi/)
- [Typescript](https://www.typescriptlang.org/)

## :runner: Getting Started
First, make sure you have **[Node](https://nodejs.org/en/)**, then clone the project with:
```
git clone https://github.com/danieljpgo/playroom-api.git
```

With **[npm](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)**, install dependencies:
```
npm install
```
Database **migrations**:

```
// script
npm run knex:migrate
// or 
knex --knexfile knexfile.ts migrate:latest
```
Database **seeding**:
```
// script
npm run knex:seed
// or
knex --knexfile knexfile.ts seed:run
```
Use your **machine's ip** in the **config.ts** file:
```
const config = {
  port: 3333,
  adress: 'http://192.168.0.56:' // change here
}
```
In order to **start** the application in a development environment, execute:
```
// script
npm run dev
// or
ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts
```
Any questions or problems access the links to the main technologies mentioned in <a href="#technologies">Technologies</a>.

## :page_with_curl: License
This project is under the [MIT license](https://github.com/danieljpgo/playroom-api/blob/master/LICENSE).
<div>Released in 2020.</div>

Make with ❤️ by [Daniel Jorge](https://github.com/danieljpgo)
