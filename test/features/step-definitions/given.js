import { Given,When,Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger";
import constants from "../../data/constants.json";


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

Given(/^As (a|an) (.*) user Login to inventory webapp$/,async(prefixTxt,username,dataTable)=>{
   console.log(`Test user is ${process.env.TEST_USERNAME}`)
   logger.info(`Starting test `)
   
//    await browser.url(browser.config.sauceurl) 
    let dt=dataTable.hashes()
    console.log(`type of datatable is ${typeof dt.constructor}`)
    console.log(`actual value is ${JSON.stringify(dt)}`)
    await browser.url('https://www.saucedemo.com/v1/index.html')
    await browser.setTimeout({implicit: 50000,pageLoad: 30000})
    await browser.maximizeWindow()
    await $("//input[@id='user-name']").setValue(dt[0].Username)
    // await $("//input[@id='user-name']").setValue(process.env.TEST_USERNAME)
    await $("//input[@id='password']").setValue(process.env.TEST_PASSWORD)
    await $("//input[@id='login-button']").click()
    
    await browser.back()
    await browser.forward()

    // this.appid="ABC123"

})

Given(/^Get list of (.*) from reqres.in$/,async(endPointRef)=>{
    if(!endPointRef) throw Error(`end point is not correct ${endPointRef}`)
    let endPoint=""
    if(endPoint.trim().toUpperCase==="USERS"){
        endPoint = constants.REQRES.GET_USER
    }

    if(!endPoint) throw Error(`error getting endpoint ${endPoint}`)
        


})