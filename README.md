# Stock Journal
#### Video Demo:  https://youtu.be/dc_BTcyXAds
#### Description:

I have recently been getting into stock trading and decided to base my final project on a stock trading journal. The journal is used to keep track of trades and assess the success and profitability of a trader's trading strategies. Basically, I wanted to make a website where I could input all of my trades(stock name, share quantity, profit/loss, etc.) and then the website would run some basic analytics to assess performance.

Initially, I wanted to mainly use javascript to create a website that would serve as my stock journal. All of my trades would be stored locally in a simple database. However, after working on this for some time I found out that due to security risks, you cannot save data locally using just javascript. After doing some more research I found out that websites have a frontend and a backend; I then decicded to use React and node.js to create a single page web application that would serve as my stock journal. The trades would be stored locally in a sqlite3 database.

List of backend files:

->backend>api>migrations>20210718022240_trades.js => This just contains the input fields of the sqlite3 table. Things such as trade id, stock name, share quantity, etc.

->backend>api>seeds>001-trade-seeds.js => Contains some sample trades
->backend>api>dbConfig.js => Contains knex that is used to connect the backend to the frontend
->backend>api>server.js => Contains all the GET and POST links for the web application
->backend>api>trades.db3 => The sqlite3 database file that has all the trades
->backend>node_modules => Contains all node.js modules used to run the backend
->backend>index.js => Sets port number and initiates server
->backend>knexfile.js => Specifies sqlite3 as the database, sets locations for seed data and migration data
->backend>package-lock.json => Contains information on node modules
->backend>package.json => General info on the backend such as scripts and dependencies

->frontend>src>components => Contains all the parts of the application such as the login button, chart, etc
->frontend>src>App.css => Contains all the design styles used in the web application
->frontend>src>App.js => Calls up components
->frontend>src>index.js => Calls the App.js file
->frontend>.env => Sets the Auth0 domain and client
->frontend>package-lock.json => Contains information on node modules
->frontend>package.json => General info on the frontend such as scripts and dependencies
