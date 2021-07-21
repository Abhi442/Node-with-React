'use strict';

import mysql from 'mysql';

//local mysql db connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo'
});

// connection db
db.connect((err) => {   
    if (err) {
        console.error('error connecting', err);
        return;
        // throw err;
    }
    console.log("Database Connected!");
});


export default db;