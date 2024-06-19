const allureReporter = require('@wdio/allure-reporter').default
class Wait {
    constructor() {
        const EC = require("wdio-wait-for");
        const waitTime = 120000;
        this.waitTillElementVisible =async function (element) {
            await browser.waitUntil(EC.visibilityOf(element), {
                timeout: waitTime
            });
        };
        this.waitTillInvisibilityOf =async function (element) {
           await browser.waitUntil(EC.invisibilityOf(element), {
               timeout: waitTime
           });
        };

        this.waitTillAlertIsPresent =async function (element, text) {
            await browser.waitUntil(EC.alertIsPresent(), {
                timeout: waitTime
            });
        };

        this.waitTillElementToBeSelected =async function (element) {
            await browser.waitUntil(EC.elementToBeSelected(element), {
                timeout: waitTime
            });
        };
        this.waitTillStalenessOf =async function (element) {
           await browser.waitUntil(EC.stalenessOf(element), {
               timeout: waitTime
           });
        };
        this.waitTillElementClickable =async function (element) {
           await browser.waitUntil(EC.elementToBeClickable(element), {
               timeout: waitTime
           });
        };
    }

    async attachScreenshot(filename) {
        let png = await browser.takeScreenshot();
        // await allure.createAttachment(filename, new Buffer(png, 'base64'));
        await allureReporter.addAttachment(filename, new Buffer(png, 'base64'));
    }
    
}
 module.exports = new Wait();