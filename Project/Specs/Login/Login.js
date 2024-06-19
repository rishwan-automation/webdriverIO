var login = require("../../Pages/Login");
var HomePage = require("../../Pages/HomePage");
var StudyDetailPage = require("../../Pages/StudyDetailPage");
var waits = require("../../../Framework/Utilities/browser");
const allureReporter = require('@wdio/allure-reporter').default
describe('User Access', function () {
    it('qa_superadmin_studydetailpage', async function () {
        allureReporter.addStep("Sign In", [{
            content: await login.signIn(login.strSuperAdminUserName, login.strSuperAdminPassword),
            content: await waits.waitTillElementVisible(HomePage.lnkSiteinSiteRiskTable)
        }])
        allureReporter.addStep("Navigate to study detail page", [{
            content: await HomePage.navigateToStudyDetailPage(),
        }])
        allureReporter.addStep("Verify Study ID in Study Details page ", [{
            content: await waits.attachScreenshot("Study ID in Study Details page"),
            content: expect(await StudyDetailPage.StdyId.getText()).toContain(login.studyID)
        }])
    })
})