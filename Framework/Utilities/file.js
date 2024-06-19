const excelToJson = require("convert-excel-to-json")
var database = require("../../RTOA/Specs/DataBase")
class file{
getExcelData(fileName){
    var excelData = excelToJson({
        sourceFile: fileName,
    })
    return excelData
}
getExcelSheetData(fileName,sheetName){
    var excelData = this.getExcelData(fileName)
    var sheetData = excelData[sheetName]
    return sheetData
}
getExcelRowCount(fileName,sheetName){
    var excelData = this.getExcelData(fileName)
    var count =excelData[sheetName]
    var rowCount = Object.keys(count).length
    return rowCount
}
getExcelColumnCount(fileName,sheetName){
    var excelData = this.getExcelData(fileName)
    var count =excelData[sheetName][0]
    var columnCount = Object.keys(count).length
    return columnCount
}
getTcIDFromExcel(fileName,sheetName,rowNumber){
    var testCaseID = this.getExcelSheetData(fileName,sheetName)[rowNumber].A     
    return testCaseID
}
getQueryFromExcel(fileName,sheetName,rowNumber){
    var query = this.getExcelSheetData(fileName,sheetName)[rowNumber].B
    return query
}
getExpectedResultFromExcel(fileName,sheetName,rowNumber){
    var expectedResult = this.getExcelSheetData(fileName,sheetName)[rowNumber].C
    return expectedResult
}

getnavigationtypeFromExcel(fileName,sheetName,rowNumber){
    var type = this.getExcelSheetData(fileName,sheetName)[rowNumber].E
    return type
}
getroletypeFromExcel(fileName,sheetName,rowNumber){
    var role = this.getExcelSheetData(fileName,sheetName)[rowNumber].D
    return role
}
getmaintabs(fileName, sheetName, rowNumber){
    var maintab = this.getExcelSheetData(fileName,sheetName)[rowNumber].H
    return maintab
}
getsubtabnavigation(fileName, sheetName, rowNumber){
    var subtabnavigation = this.getExcelSheetData(fileName,sheetName)[rowNumber].F
    return subtabnavigation
}
getsubtab(fileName, sheetName, rowNumber){
    var subtab = this.getExcelSheetData(fileName,sheetName)[rowNumber].I
    return subtab
}
getdatatable(fileName, sheetName, rowNumber){
    var table = this.getExcelSheetData(fileName,sheetName)[rowNumber].J
    return table
}
gettblcol(fileName, sheetName, rowNumber){
    var colval = this.getExcelSheetData(fileName,sheetName)[rowNumber].K
    return colval
}
getgrapval(fileName, sheetName, rowNumber){
    var graphval = this.getExcelSheetData(fileName,sheetName)[rowNumber].L
    return graphval
}
async verifySQLQuery(fileName,sheetName,rowNumber){
    var query = this.getQueryFromExcel(fileName,sheetName,rowNumber)
    await database.connectSnowflake
    var dbResult = await database.result(query,)
    var rowLength =await  dbResult.length
    // expect(await rowLength).toBe(expectedResult)
    return rowLength
}
}
module.exports= new file()