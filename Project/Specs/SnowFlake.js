// const Snowflake = require('snowflake-promise').Snowflake;
var snf = require("./DataBase")
describe('Snowflake', function () {
    it('data from snowflake', async () => {
        
        await snf.con
        var rows =await snf.result('select dimension_weight from PAREXEL_QA.lokavant_risk_model.CFG_STUDY_KRI_WEIGHTS_DIMENSIONS where study_id = 5332 order by date_added desc limit 3',)
        console.log(await rows);

        // var rows = await snf.snowflake.execute(
        //     'select dimension_weight from PAREXEL_QA.lokavant_risk_model.CFG_STUDY_KRI_WEIGHTS_DIMENSIONS where study_id = 5332 order by date_added desc limit 3',
        // );
        // await snf.snowflake.destroy()
        // expect(rows[0]['DIMENSION_WEIGHT']).toBe(0.3,"Dimension weight in DB is not equal")
    })
})