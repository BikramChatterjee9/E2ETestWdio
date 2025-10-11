import { Given,When,Then } from "@wdio/cucumber-framework";


// Given(/^Login to inventory webapp$/,async()=>{
//     // await browser.url('https://www.saucedemo.com/v1/index.html')
//     // await browser.setTimeout({implicit: 50000,pageLoad: 30000})
//     // await browser.maximizeWindow()
//     // await $("//input[@id='user-name']").setValue("standard_user")
//     // await $("//input[@id='password']").setValue("secret_sauce")
//     // await $("//input[@id='login-button']").click()

//     // await browser.pause(5000)
//     // await browser.reloadSession()
//     // await browser.url('https://www.saucedemo.com/v1/index.html')
//     // await browser.setTimeout({implicit: 50000,pageLoad: 30000})
//     // await browser.maximizeWindow()
//     // await $("//input[@id='user-name']").setValue("standard_user")
//     // await $("//input[@id='password']").setValue("secret_sauce")
//     // await $("//input[@id='login-button']").click()

//    console.log(`Test user is ${process.env.TEST_USERNAME}`)
//     await browser.url('https://www.saucedemo.com/v1/index.html')
//     await browser.setTimeout({implicit: 50000,pageLoad: 30000})
//     await browser.maximizeWindow()
//     await $("//input[@id='user-name']").setValue(process.env.TEST_USERNAME)
//     await $("//input[@id='password']").setValue(process.env.TEST_PASSWORD)
//     await $("//input[@id='login-button']").click()
    
//     await browser.back()
//     await browser.forward()

// })

Given(/^As (a|an) (.*) user Login to inventory webapp$/,async(prefixTxt,username)=>{
   console.log(`Test user is ${process.env.TEST_USERNAME}`)
    await browser.url('https://www.saucedemo.com/v1/index.html')
    await browser.setTimeout({implicit: 50000,pageLoad: 30000})
    await browser.maximizeWindow()
    await $("//input[@id='user-name']").setValue(process.env.TEST_USERNAME)
    await $("//input[@id='password']").setValue(process.env.TEST_PASSWORD)
    await $("//input[@id='login-button']").click()
    
    await browser.back()
    await browser.forward()

})