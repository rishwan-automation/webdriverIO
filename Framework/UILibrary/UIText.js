var UIFoundations = require("./UIFoundation.js");
class uiText{
  // Original
  setText =async function(element,strText){
   if (UIFoundations.isEnabled(element)){
        try {
            element.setValue(strText)
            // return strText +" text entered successfully";
            // console.log(strText+" text entered successfully")
        } 
            catch(e) {
            console.log(e);
        }
   }
  }
  
  // setText =async function(element,strText){
  //   if (UIFoundations.isEleEnabled(element)){
  //        try {
  //            element.setValue(strText)
  //            // return strText +" text entered successfully";
  //            // console.log(strText+" text entered successfully")
  //        } 
  //            catch(e) {
  //            console.log(e);
  //        }
  //   }
  //  }
}
module.exports = new uiText();