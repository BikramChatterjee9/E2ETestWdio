import { Given,When,Then} from "@wdio/cucumber-framework";


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

Given(/^home page is opened$/,async()=>{
    await browser.url('/inputs')
    await browser.setTimeout({implicit: 50000,pageLoad: 30000})
    await browser.maximizeWindow()
})

Then(/^perform web interactions$/,async()=>{
    const ele = await $("//input[@type='number']")
    // await ele.setValue("12345")
    await browser.pause(5000)

    let num=12345
    let numStr = num.toString()

    await ele.click()
    for(let i=0;i<numStr.length;i++)
    {
        let chars=numStr.charAt(i)
        await browser.keys(chars)
        await browser.pause(2000)
    }
})

