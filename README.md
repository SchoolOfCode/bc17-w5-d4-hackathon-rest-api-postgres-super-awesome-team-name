PLAN
-Use example database examples ✅
-Set up render database link ✅
(instructions in prev workshop) ✅

-Clone Repo ✅
-Install packages ✅
-Create database in render ✅
-Add environment variable in Render ✅
-Add environment variables to.env example and rename the file ✅
-Start the app and see if it works ✅
-Create a basic README with 'getting started' section ✅

As we are using the exisitng database design (Albums/Artists) ✅
-run npm install ✅
-Add evironment variables to .env.example and rename the file ✅
-Try starting the app 'npm run dev' ✅
-Run the 'npm run reset-database' command to check we can connect and that the reset script works and doesn't error ✅
-Begin working on the handlers and helpers  ✅
  -Change helper file name ✅
  -Change helper file function names ✅
  -Change the request handler URLS ✅
  -Test the new request handlers work/can be called ✅




Milestones:
-Plan and design your database schema (You should have a minimum of 2 tables that are linked with a primary and foreign key) ✅
(We are using exisiting one) 
DROP TABLE IF EXISTS artists CASCADE; ✅
DROP TABLE IF EXISTS albums CASCADE; ✅

//What do we want in the artists table:
  (This has been preset already- should we use that software to look at what the schema looks like?)
  -name 
  
  
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
