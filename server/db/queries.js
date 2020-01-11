const pool = require('./postgres');

const testPostgres = () => {
    return pool.query({text: `select * from categories;`});
};


module.exports = {
    testPostgres
};
