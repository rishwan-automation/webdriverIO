var Jsonfile = require("../../Framework/Utilities/JSON")
class Environment{
    readConfigJson = function(jsonFilePath,environment,parameter){
        const fs = require('fs');
        let rawdata = fs.readFileSync(jsonFilePath);
        let configuration = JSON.parse(rawdata);
        for (var item in configuration) {
            if (item==environment){
                for (var subItem in configuration[item]) {
                    if(subItem==parameter){
                        console.log(configuration[item][parameter]);
                        return configuration[item][parameter]
                  }
                }
            }
        }
     }

     getEnvironmentRootObject(objJSON, strEnvironmentName) {
         let qa  = "QA"
         let evnDEV  = "DEV"
         let evnHFX5 = "TC5HFX"
         let envQA9  = "TC9QA"
         let rootEnvNode
         switch (strEnvironmentName) {
            case qa:
               rootEnvNode = objJSON[qa]
               break;
            case evnHFX5:
               rootEnvNode = objJSON[evnHFX5]
               break;
            case evnDEV:
               rootEnvNode = objJSON[evnDEV]
               break;
            case envQA9:
               rootEnvNode = objJSON[envQA9]
               break;
            default:
               break;
         }
         return rootEnvNode;
      }

    getUserName(objJSON) {
      let strUserName = objJSON["userName"]
         return [strUserName, ]
      //   return strUserName
  } 
    getPassward(objJSON) {
        let strPassword = objJSON["password"]
        return [strPassword,]
    }

    getURL(objJSON) {
        let strURL = objJSON["Url"]
        return strURL
    }
     getStudyID(objJSON){
        let studyID = objJSON["StudyID"]
        return studyID
    }
     getCountry(objJSON){
        let country = objJSON["Country"]
        return country
     }
     getDataBaseName(objJSON){
      let DBName = objJSON["DataBase"]
      return DBName
     }
     getDataBaseSchema(objJSON){
      let DBSchema = objJSON["Schema"]
      return DBSchema
     }
     getDataBaseRole(objJSON){
      let DBRole = objJSON["Role"]
      return DBRole
     }
}
module.exports = new Environment();