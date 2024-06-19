class UIFoundations {
    constructor() {
        // this.isPresent = function(element){
        //     return element.isPresent().then(function(result){
        //         if ( result ) {
        //         return result
        //         }
        //         else{
        //         return result
        //         }
        //     })
        // }
        this.isPresent =async function(element){
            var result = await element.isExisting();
                return result
        }

        // Original
        this.isEnabled = function(element){
            if (this.isPresent){
                return element.isEnabled().then(function(result1) {
                    if ( result1 ) {
                        return result1
                        }
                        else{
                        return result1
                        }
                    }); 
            }
            else {
                return false;
            }
        }

        // this.isEleEnabled = function(element){
        //     if (this.isPresent){
        //         return element.isEnabled().then(function(result1) {
        //             if ( result1 ) {
        //                 return result1
        //                 }
        //                 else{
        //                 return result1
        //         }
        //             }); 
        //     }
        //     else {
        //         return false;
        //     }
        // }

        // this.isEleEnabled =async function(element){
        //     var blElePresent =await this.isElePresent(element)  
        //     if (blElePresent == true){
        //         var result = await element.isEnabled()
        //         return result
        //     }
        //     else {ws
        //         return false;
        //     }
        // }

        // Original
        this.Click =async function(element){
             if (this.isEnabled(element)){
                  try {
                      await element.click();
                  }
                      catch(error) {
                      console.log(error.name);
                  }
             }
            }


        // this.Click = async function (element) {
        //     if (this.isEleEnabled(element)) {
        //         try {
        //             await element.click();
        //         }
        //         catch (error) {
        //             console.log(error.name);
        //         }
        //     }
        // }


        //    this.Click = async function(element){
        //        var blisEnabled = await this.isEleEnabled(element)
        //        try {

        //     if (blisEnabled == true){
        //         await element.click();
        //          }
        //          else{
        //             console.log(await error.name);
        //          }
        //         }
        //              catch(error) {
        //              console.log(await error.name);
        //          }

        //    }
    }
}
module.exports = new UIFoundations();