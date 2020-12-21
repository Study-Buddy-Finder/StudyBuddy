const { Pool } = require("pg");

const PG_URI =
  "postgres://kpdnepqa:36Og43PH1Z-2EQ3dJMNGBL0qm9HV1er6@suleiman.db.elephantsql.com:5432/kpdnepqa";
//   "postgres://cukiufpt:hCY9RsHsITbj_Ehj66xWwAwZlHfesNCx@suleiman.db.elephantsql.com:5432/cukiufpt";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};