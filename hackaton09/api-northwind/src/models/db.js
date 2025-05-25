const { Pool } = require('pg');


const pool  = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'v2',
    password: '12Milano#34',
    port: 5432,
});


module.exports = pool;