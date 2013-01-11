# sc2-unit-api

a simple http api for accessing information about Starcraft 2 units. this information is seeded into CouchDB by web scraping the Starcraft 2 Game Guide.

## installation

```
$ npm install -g sc2-unit-api
```

## setting up the database

this tool will set up and seed the database.

```
$ sc2-unit-api-setup
CouchDB hostname (http://127.0.0.1) 
CouchDB port (5984) 
CouchDB database (units) 
Database does not exist. Creating now...
Database created
Scraping http://us.battle.net/sc2/en/game/...
Finished scraping
```

## starting the server

```
$ sc2-unit-api-server
Started HTTP server on port 8000...
```

## todo

- add nconf support for http/couchdb
- add library documentation
- add non-attribute metadata (images, etc)
- scrape remaining attributes attributes
