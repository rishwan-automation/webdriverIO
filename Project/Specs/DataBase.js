const Snowflake = require('snowflake-promise').Snowflake;
const login = require("../Pages/Login")
class SnowFlake {

    snowflake = new Snowflake({
        account: "yk42692.us-east-1",
        username: "QA_AUTOMATION",
        password: "T3stD4tA!W3ll",
        database: login.DBName,       
        role: login.DBRole,
        schema: login.DBSchema, 

    });
    connectSnowflake = this.snowflake.connect();
    result = async function (query) {
        var rows = await this.snowflake.execute(
            query
        );
        return rows
    }
}
module.exports = new SnowFlake();