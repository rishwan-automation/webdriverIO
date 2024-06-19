
const UIFoundation = require("../../Framework/UILibrary/UIFoundation")
const StudyDetailPages = require("../Pages/StudyDetailPage.js.js")
const allureReporter = require('@wdio/allure-reporter').default
var uiTexts = require("../../Framework/UILibrary/UIText");
var Utilities = require("../../Framework/Utilities/browser");


class GeneralMethods{
    async ClickAndVerifySearchOperationInTbl(BtnSearch,columnNO,Strtext,TblRowPath = $(StudyDetailPages.TblRowFirst+columnNO+StudyDetailPages.TblSiteJournryHeaderSecond)){
        var strTblRowDataValue
        if (await BtnSearch.isExisting() == true) {
            await UIFoundation.Click(BtnSearch)
            await Utilities.waitTillElementVisible(StudyDetailPages.txtSearch)
            await uiTexts.setText(await StudyDetailPages.txtSearch,await Strtext)
            await browser.pause(2000)
            var TblRowData = await TblRowPath
            strTblRowDataValue = await TblRowData.getText()
            await UIFoundation.Click(BtnSearch)
        } 
        else {
            strTblRowDataValue = "No Data"
        }
        return strTblRowDataValue
    }
    
    
    async verifyTableData(tablerow) {
        var strTableData
        var flag
        await Utilities.waitTillElementVisible(tablerow)
        if (await tablerow.isExisting() == true) {
            strTableData = await tablerow.getText()
            if (strTableData == 'No Data') {
                flag = false
            } else {
                flag = true
            }
        }
        return flag
    
    }
    
    
    async SelectFilterFirstValueInTblDD(TblPath, SelectBtnFisrt, SelectBtnSecond, index) {
        var strSelectedValue
        var strTblRow
        var strTblRowValue
        var flag
        var strStrongTxt
        await UIFoundation.Click($(SelectBtnFisrt + index + SelectBtnSecond))
        await Utilities.waitTillElementVisible(await StudyDetailPages.btnOptionHighInEnrollment)
        await browser.pause(1000)
        await UIFoundation.Click(StudyDetailPages.btnOptionHighInEnrollment)
        await browser.pause(2000)
        strSelectedValue = await StudyDetailPages.lblSelectedOptionInFilter.getText()
        await browser.pause(2000)
        strTblRow = await $(TblPath + "//tr[1]//td[" + index + "]")
        if (await strTblRow.isExisting() == true) {
            strStrongTxt = $(TblPath + "//tr[1]//td[" + index + "]//strong")
            if (await strStrongTxt.isExisting() == true) {
                strTblRowValue = await strStrongTxt.getText()
                if (strTblRowValue == strSelectedValue.toUpperCase()) {
                    flag = true
                } else {
                    flag = false
                }
            } else {
                strTblRowValue = await strTblRow.getText()
                if (strTblRowValue == strSelectedValue) {
                    flag = true
                } else {
                    flag = false
                }
            }
            
        } else {
            strTblRowValue = await $(TblPath + "//tr[1]").getText()
            if (strTblRowValue == 'No Data') {
                flag = true
            } else {
                flag = false
            }
        }
        await UIFoundation.Click(StudyDetailPages.btnOptionHighInEnrollment)
        // console.log();
        return flag
    }
    
    // StudyDetailTableOperationMethod.js
    async VerifyTblFilters(TblName,HeaderName,index,filterIconPathFirst,filterIconPathSecond,TblPath,TblSelectBtnPathFirst,TblSelectBtnPathSecond){
        var strOptionSelected
        allureReporter.startStep(`Verify ${HeaderName} Filter Operations In ${TblName} Table`)
            allureReporter.addStep(`Verify Filter Icon Displayed In ${TblName} Table ${HeaderName} Columns`, [{
                content: await expect(await $(filterIconPathFirst + index + filterIconPathSecond).isExisting()).toBe(true, `Filter Icon Not Displayed in ${HeaderName} Columns In ${TblName} Table`)
            }])
            allureReporter.addStep(`Click Filter Icon Displayed In ${TblName} Table ${HeaderName} Columns`, [{
                content: await UIFoundation.Click($(filterIconPathFirst + index + filterIconPathSecond)),
                content: await browser.pause(2000),
            }])
            allureReporter.addStep(`Verify Selected Filter High Option Displayed In ${TblName} Table ${HeaderName} Columns`, [{
                content: strOptionSelected = await StudyDetailPages.SelectHighFilterInTbl(TblPath, TblSelectBtnPathFirst, TblSelectBtnPathSecond, index),
                content: await expect(strOptionSelected).toBe(true, `Select High Dropdown Not Displayed in ${HeaderName} Columns In ${TblName} Table`),
            }])
            allureReporter.addStep(`Verify Selected Filter Medium Option Displayed In ${TblName} Table ${HeaderName} Columns`, [{
                content: strOptionSelected = await StudyDetailPages.SelectMediumFilterInTbl(TblPath, TblSelectBtnPathFirst, TblSelectBtnPathSecond, index),
                content: await expect(strOptionSelected).toBe(true, `Select Medium Dropdown Not Displayed in ${HeaderName} Columns In ${TblName} Table`),
            }])
            allureReporter.addStep(`Verify Selected Filter Low Option Displayed In ${TblName} Table ${HeaderName} Columns`, [{
                content: strOptionSelected = await StudyDetailPages.SelectLowFilterInTbl(TblPath, TblSelectBtnPathFirst, TblSelectBtnPathSecond, index),
                content: await expect(strOptionSelected).toBe(true, `Select Low Dropdown Not Displayed in ${HeaderName} Columns In ${TblName} Table`),
                content: await Utilities.attachScreenshot(`${HeaderName}`),
                content: await UIFoundation.Click($(filterIconPathFirst + index + filterIconPathSecond)),
            }])
        allureReporter.endStep()
    }


    async roundToPrecision(num, precision = 1) {
        return Math.round((Number(num) + Number.EPSILON) * 10 ** precision) / 10 ** precision;
    };

    async removeDuplicates(arrItem) {
        return [...new Set(arrItem)];
    }

    async roundUp(num, precision) {
        precision = Math.pow(10, precision)
        return Math.ceil(num * precision) / precision
    }

    /***************************************************************************
    * Method Name : convertDateFormat
    * Created By : Rishwan
    * Purpose : Convert a date to application date format.
    * Parameter: StrDate-->Date to be coverted,format-->format of the date (DD-MMM-YYYY)
    * date: 10/5/2023
    ************************************************************************
    */
    async convertDateFormat(StrDate,format='DD-MMM-YYYY'){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var strCovertedValue
        var today
        var dd
        var mm
        var yyyy
        today = new Date(await StrDate)
        dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, '0')
        yyyy = today.getFullYear()
        if (format == 'DD-MMM-YYYY') {
            strCovertedValue = dd + '-' + months[mm - 1] + '-' + yyyy
        } else {
            strCovertedValue = yyyy + '-' + mm + '-' + dd
        }
        return strCovertedValue
    }


}
module.exports = new GeneralMethods();
