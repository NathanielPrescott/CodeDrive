## Table of contents

- [Quick start](#quick-start)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Author](#author)
- [Documentation](#documentation)


## Quick start

```bash
# clone the repo
git clone https://github.com/NathanielPrescott/CodeDrive.git

# change directory
cd CodeDrive

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 


## Front-end

### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developpement
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

### Settings
* you can select one of these Datasources

* Change settings in src/app/modules/application/movies-images-list
* File config/config.service.ts
* default: LOCAL JSON
* LOCAL REST API CRUD : http://localhost:5200

### Tests
* `npm run lint`
* `npm run test`
* `npm run e2e`

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

### Prototype Bootstrap
* `change directory` cd ui
* launch html pages in your browser

## Back-end

### Installation
* `change directory` cd api 
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Database Creation
* `change login and password for postgreSQL in file config.json`
* `login":"postgres"`
* `password":"your_password"`

* `npm run app` (database creation)

### Developpement
* `npm run start`
* in your browser [http://localhost:5200](http://localhost:5200) 

### Tests API
* in your browser [http://localhost:5200/movies](http://localhost:5200/movies) 


### Author
* Updated: 4/19/2020
* Author: Nathan Prescott

## Referencing
* https://github.com/ganatan/angular9-app
