class Json{
    // readConfigJson = function(jsonFilePath,environment,parameter){
    //     const fs = require('fs');
    //     let rawdata = fs.readFileSync(jsonFilePath);
    //     let configuration = JSON.parse(rawdata);
    //         for (var item in configuration) {
    //             if (item==environment){
    //                 for (var subItem in configuration[item]) {
    //                     if(subItem==parameter){
    //                         console.log(configuration[item][parameter]);
    //                         return configuration[item][parameter]
    //                     }
    //                 }
    //             }
    //         }
    //  }

     getJSONFileObject(filePath){
        const fs = require('fs');
        let rawdata = fs.readFileSync(filePath);
        let JSONObject = JSON.parse(rawdata);
        return JSONObject;
     };
};
module.exports = new Json();