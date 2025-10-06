import { Given,When,Then} from "@wdio/cucumber-framework";

import { assert } from "chai";


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
    await browser.url('/frames')
    await browser.setTimeout({implicit: 50000,pageLoad: 30000})
    await browser.maximizeWindow()
})

Then(/^perform web interactions$/,async()=>{
    // const ele = await $("//input[@type='number']")
    // // await ele.setValue("12345")
    // await browser.pause(5000)

    // let num=12345
    // let numStr = num.toString()

    // await ele.click()
    // for(let i=0;i<numStr.length;i++)
    // {
    //     let chars=numStr.charAt(i)
    //     await browser.keys(chars)
    //     await browser.pause(2000)
    // }

    // let ele = await $("//select/option[@selected='selected']")
    // console.log('value is = ',await ele.getText())

    // let ddp = await $("//select[@id='dropdown']")
    // await ddp.selectByVisibleText("Option 2")
    // await browser.pause(4000)
    // await ddp.selectByAttribute("value","1")
    // await browser.pause(4000)
    // await ddp.selectByIndex(0)
    // await browser.pause(4000)

    // let allele = await $$("//select[@id='dropdown']/option")
    // let newarr=[]
    // for(let i=0;i<allele.length;i++)
    // {
    //     let ele=allele[i]
    //     let val = await ele.getText()
    //     newarr.push(val)
    //     console.log(val)
    // }

    // let checkbox1 = await $("//form[@id='checkboxes']/input[1]")
    // await checkbox1.click()
    // await browser.pause(3000)

    // let checkbox2 = await $("//form[@id='checkboxes']/input[2]")
    // await checkbox2.click()
    // await browser.pause(3000)

    // if(!await checkbox1.isSelected())
    // {
    // await checkbox1.click()
    // await browser.pause(3000)
    // }
    // assert.isTrue(await checkbox1.isSelected())

    // let allcheck = await $$("//form[@id='checkboxes']/input")
    // for(let i=0;i<allcheck.length;i++)
    // {
    //     let ele=allcheck[i]
    //     if(await ele.isSelected())
    //     {
    //         console.log('checkbox is selected ',ele)
    //     }
    // }

    // const parentWin = await browser.getWindowHandle()
    // await $('*=Click Here').click()
    // await $('*=Elemental Selenium').click()
    // console.log(await browser.getTitle())

    // let currentTitle = await browser.getTitle()

    // let winHandle = await browser.getWindowHandles()
    // for(let i=0;i<winHandle.length;i++)
    // {
    //     console.log('--->',winHandle[i])
    //     await browser.switchToWindow(winHandle[i])
    //     currentTitle= await browser.getTitle()
    //     if(currentTitle==='Home | Elemental Selenium')
    //     {
    //         await browser.switchToWindow(winHandle[i])
    //         console.log('New title ', await browser.getTitle())
    //     }
    // }

    // await browser.switchToWindow(parentWin)
    // console.log('final title - ',await browser.getTitle())

    // await $("//button[@onclick='jsAlert()']").click()
    // if(await browser.isAlertOpen())
    // {
    //     console.log(await browser.getAlertText())
    //     await browser.acceptAlert()
    // }

    // await $("//button[@onclick='jsConfirm()']").click()
    // if(await browser.isAlertOpen())
    // {
    //     console.log(await browser.getAlertText())
    //     await browser.dismissAlert()
    // }
    
    // await $("//button[@onclick='jsPrompt()']").click()
    // if(await browser.isAlertOpen())
    // {
    //     console.log(await browser.getAlertText())
    //     await browser.sendAlertText('Hello')
    // }

    // console.log(process.cwd());

    // await $("//input[@id='file-upload']").addValue(`${process.cwd()}/data/fileUpload/demo.txt`)

    // await $("//input[@id='file-submit']").click

    // await browser.pause(5000)

    await $('*=iFrame').click()

    let ele = await $("//iframe[@id='mce_0_ifr']")

    await browser.switchToFrame(ele)

    //interact with frame element

    await browser.switchToParentFrame()

    





    
})

