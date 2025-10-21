import chai from "chai"

export default class page{
    constructor()
    {

    }

    async navigateTo(path)
    {
        await browser.url(path)
        await browser.maximizeWindow()
    }

    async click(ele) {
        await ele.waitForClickable({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.click()
    }
    async typeInto(ele, text) {
        console.log(`>>> element id: ${ele.selector}`);
        await ele.waitForDisplayed({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.setValue(text)
    }
}