// const { BREAK } = require("protractor-beautiful-reporter")
const UIFoundation = require("./UIFoundation")

class UITable {
    constructor() {
        // Original
        this.getRowCount = async function (tblObject) {
            return UIFoundation.isEnabled(tblObject).then(async function (result) {
                if (result) {
                    var rowCount = await tblObject.$$("tr").length
                    return rowCount
                }
                else {
                    return result
                }
            });
        }

        // this.getRowCount = async function (tblObject) {
        //     return UIFoundation.isEleEnabled(tblObject).then(async function (result) {
        //         if (result) {
        //             var rowCount = await tblObject.$$("tr").length
        //             return rowCount
        //         }
        //         else {
        //             return result
        //         }
        //     });
        // }



        this.getColumnCount = async function (tblObject) {
            return UIFoundation.isEnabled(tblObject).then(async function (result) {
                if (result) {
                    var columnCount = await tblObject.$$("th").length
                    return columnCount
                }
                else {
                    return result
                }
            });
        }
        this.isColumnPresent = async function (tblObject, strColumnName) {
            var columnCount = await this.getColumnCount(tblObject)
            var result, strColumnNameInTable
            console.log(await columnCount);
            for (var i = 0; i <= columnCount - 1; i++) {
                strColumnNameInTable = await tblObject.$$("th")[i].getText();
                if (strColumnName === strColumnNameInTable) {
                    result = true
                    return result
                    break
                }
            }
        }
        this.getColumnIndex = async function (tblObject, strColumnName) {
            // return UIFoundation.isEnabled(tblObject).then(async function(result){
            if ((await UIFoundation.isEnabled(tblObject)) == true) {
                // if ( result ) {
                var columnCount = await this.getColumnCount(tblObject)
                var result, strColumnNameInTable
                for (var i = 0; i <= columnCount - 1; i++) {
                    strColumnNameInTable = await tblObject.$$("th")[i].getText();
                    if (strColumnName === strColumnNameInTable) {
                        return i
                        break;
                    }
                }
            }
            else {
                return result
            }
            // })
        }

        this.getColumndata = async function (tblObject, strColumnIndex) {
            var arrElements = []
            if ((await UIFoundation.isEnabled($(tblObject))) == true) {
                var rowCount = await this.getRowCount($(tblObject))
                var rowVal, strColumnIndex
                for (var i = 1; i <= rowCount; i++) {
                    rowVal = await $(`${tblObject}//tr[${i}]/td[${strColumnIndex}]`).getText();
                    arrElements.push(rowVal)
                    // if (rowVal === strColumnIndex) {
                    // return arrElements
                    // }
                }
            }
            else {
                return false
            }
            return arrElements
        }
    }
}
module.exports = new UITable();