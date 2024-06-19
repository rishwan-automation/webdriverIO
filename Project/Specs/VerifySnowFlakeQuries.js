var file = require('../../Framework/Utilities/file')
const Login = require('../Pages/Login')
const allure = require('@wdio/allure-reporter').default
var excelFile = Login.sqlDirectory + "dbt_test_scripts.xlsx"
var sheetName = "Sheet1"
var testCaseID = []
var expectedResult=[]
describe('Snowflake', function () {
        var rowCount = file.getExcelRowCount(excelFile,sheetName)
        for (let i = 1; i < rowCount; i++) {
            testCaseID.push(file.getTcIDFromExcel(excelFile,sheetName,i))
            expectedResult.push(file.getExpectedResultFromExcel(excelFile,sheetName,i))
        }
        console.log(testCaseID);
        console.log(expectedResult);
            for (let index = 0; index < testCaseID.length; index++) {
        (function (testCaseID, expectedResult) {    
        it(`${testCaseID}`, async ()=> {
        var rowLength = file.verifySQLQuery(excelFile,sheetName,index+1);
        allure.addStep(`Verify Value In Database with ${testCaseID}`,[{
               content: expect(await rowLength).toBe(expectedResult)
            }])
    })   
})(testCaseID[index], expectedResult[index]);
            }

})