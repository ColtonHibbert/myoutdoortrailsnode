see front end code at https://github.com/ColtonHibbert/myoutdoortrails

Search for and locate trails for hikes. View mapping information for your hikes. Login as a user. Utilize other features.

Built with 
React, Redux, Tachyons, Node.js, Express.js, PostgreSQL, 
Mapbox API
HikingProject API

Front-End Code
Responsive Layout
Utilizes 2 containers with Redux to split up state and complexity of App.
2 different API's work Asynchronously in conjunction to gather list of hikes and to display 
this list to the user along with GEOLOCATION of TrailHeads.
Trails are visible after locating TrailHead. 
LifeCycle Methods utilized to update components particularly the Map component and rerender list of hikes when new searches are Made. 
Window Resizing triggers a debounce method that will check media queries and switch between desktop and mobile views.

Back-End Code
Utilizes
Node.js, 
Express.js
Knex.js for creating SQL queries
Postgres Database
User login information and search history stored securely.
bcrypt utilized for hashing of passwords.
correct use of transactions for database submissions via Knex.js
correct use of API requests on back-end and secret keys  