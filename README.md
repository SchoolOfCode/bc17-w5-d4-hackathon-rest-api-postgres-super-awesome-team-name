PLAN
-Use example database examples
-Set up render database link
(instructions in prev workshop)

Milestones:
-Plan and design your database schema (You should have a minimum of 2 tables that are linked with a primary and foreign key)
(We are using exisiting one)
DROP TABLE IF EXISTS artists CASCADE;
DROP TABLE IF EXISTS albums CASCADE;

//What do we want in the artists table:
  (This has been preset already- should we use that software to look at what the schema looks like?)
  -name 
  //Do we also want artist_id in this as well? 
  
//What do we want in the albums table:
(This has been preset already)
  -title
  -published_date
  -artist_id (FK)
  //We then require a primary key here. Should we use: album_id?

-Write a database initialisation script.(THIS IS THE reset-database.js) Create a SQL script that will:
This already exists in :
 await pool.query(`
        DROP TABLE IF EXISTS artists CASCADE;
        DROP TABLE IF EXISTS albums CASCADE;
    `);

Drop any existing tables (if they exist) 

Recreate all the tables based on the schema

Populate the tables with some initial seed data
-Set up a basic Express server with a test route, logging middleware and nodemon.
-Implement CRUD operations using the pg package to interact with your database.

-Test the API using tools like Postman or Thunder Client.

Tomorrow at 12:15
-Begin planning presentation
