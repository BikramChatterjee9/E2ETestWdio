import { Given,When,Then } from "@wdio/cucumber-framework";


Given(/^google page is opened$/,async()=>{

    await browser.url('https://www.google.com')
    await browser.pause(7000)
})

When(/^search with (.*)$/,async(searchItem)=>{
    console.log(`search item ${searchItem}`);
    let ele = await $("//textarea[@name='q']")
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    await browser.pause(20000)
})

Then(/^click on first link$/,async()=>{
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^url should match (.*)$/,async(searchItem)=>{
    // let url = await browser.geturl()
    // console.log(url)

})