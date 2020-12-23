const { Pool } = require("pg");

const PG_URI =
//local db
// "postgres://mrfltxgx:iY8846DNAzSviB7MbEdhI_nrorpKDosa@suleiman.db.elephantsql.com:5432/mrfltxgx"

//
  "postgres://kpdnepqa:36Og43PH1Z-2EQ3dJMNGBL0qm9HV1er6@suleiman.db.elephantsql.com:5432/kpdnepqa";


const pool = new Pool({
  connectionString: PG_URI
})

//query function is saved onto export obj
//queries, text is the command string, params is
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
  connect: (text, params, callback) => {
    console.log("executing transaction")
    return pool.connect(text, params, callback)
  }
}