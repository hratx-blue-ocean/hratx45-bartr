# API Server

## Structure

- Used for AWS Elastic Beanstalk
    - /server/ebextensions/*
    - /server/elasticbeanstalk/*
    
- Entry point for running server
    - / server/bin/www

- Folder for database queries and database config 
    - /server/db/*
    
- Where all table queries are stored
    - /server/db/tables/*
    
- PostgresSQL connection 
    - /server/db/config.js

- PostgresSQL testing routes 
    - /server/db/testing.js

- Front end page server from
    - /server/public/*
    
- Routing
    - /server/routes/*

- Startup routes
    - /server/startup/*

