//figure out which environment code is running in and then use the config i.e local or production
const environment = process.env.NODE_ENV || "development";
//grab the connection object
const config = require("../knexfile");

//grab the specifi property based on which environment we are in i.e development or production
const environmentConfig = config[environment];

const knex = require("knex");
//pass it into knex so it connects to the db
const connection = knex(environmentConfig);

//export so we can use it elsewhere
module.exports = connection;
