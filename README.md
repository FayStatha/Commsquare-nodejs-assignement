# Commsquare-nodejs-assignement
Nodejs implementation for Commsquare Assignement.
Documentation can be found [here](Documentation.md)

## Run the server

### Create virtual environment

```
nodeenv env && source env/bin/activate
```

### Install dependencies

```
npm install
```

### Migrate and seed

```
npm run migrate && npm run seed
```

## Run the server as a docker container

## Run
```
docker-compose up
```


## Run the server locally

### Run

```
npm start
````

## Tear down

### Tear down data

```
npm run clean_db
```

## Tear down db

```
npm run down
```
