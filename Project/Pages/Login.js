var UIFoundations = require("../../Framework/UILibrary/UIFoundation")
var ReadJson = require("../Environment/environment")
var json = require("../../Framework/Utilities/JSON")

class login 
{
    constructor() {
        let jsonObj = json.getJSONFileObject("RTOA/Environment/environmentConfig.json")
        // let environment = ReadJson.getEnvironmentRootObject(jsonObj,"TC5HFX")
        let environment = ReadJson.getEnvironmentRootObject(jsonObj,"TC5QA")
        // let environment = ReadJson.getEnvironmentRootObject(jsonObj,"TC9QA")
        this.strUrl = ReadJson.getURL(environment)
        this.strUserName = ReadJson.getUserName(environment)
        this.strPassword = ReadJson.getPassward(environment)
        this.studyID = ReadJson.getStudyID(environment)
        this.countryName = ReadJson.getCountry(environment)

        this.DBName = ReadJson.getDataBaseName(environment)
        this.DBSchema = ReadJson.getDataBaseSchema(environment)
        this.DBRole = ReadJson.getDataBaseRole(environment)

        // Credentials
        // Super Admin
        this.strSuperAdminUserName = this.strUserName[0]
        this.strSuperAdminPassword =this.strPassword[0]
    }

    get btnLogin() {
        return $("button=Log In");
    }

    get userName() {
        return $("#signInFormUsername");
    }

    get password() {
        return $("#signInFormPassword");
    }

    get signinBt() {
        return $("*[name=\"signInSubmitButton\"]");
    }

    get txtLoginWarningMessage() {
        return $(".text-lg");
    }

    get btnlogOut() {
        return $(".px-2");
    }

    launchApplication = async function()
    {
       browser.url(await this.strUrl)
    }
    insertUserNamePassword = async function()
    {   
        // this.strUserName = rishwan.k
        // // this.userName = return $("#signInFormUsername");
        // await browser.execute(
        //     "arguments[0].setAttribute('value', '"+this.strUserName+"')",
        //     await this.userName
        // );
        // await browser.execute(
        //     "arguments[0].setAttribute('value', '"+this.strPassword+"')",
        //     await this.password
        // );
        await browser.execute(
            "arguments[0].setAttribute('value', '"+this.strSuperAdminUserName+"')",
            await this.userName
        );
        await browser.execute(
            "arguments[0].setAttribute('value', '"+this.strSuperAdminPassword+"')",
            await this.password
        );
        await browser.execute("arguments[0].click()", await this.signinBt);  
    }
    async signIn(userName,password){
        await this.btnLogin.click()
        await browser.pause(1000)
        await browser.execute(
            "arguments[0].setAttribute('value', '" + userName + "')",
            await this.userName
        );
        await browser.execute(
            "arguments[0].setAttribute('value', '" + password+ "')",
            await this.password
        );
        await browser.execute("arguments[0].click()", await this.signinBt);
        await browser.pause(2000)
    }
}
module.exports = new login();