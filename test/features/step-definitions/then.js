import { Given,When,Then } from "@wdio/cucumber-framework";

Then(/^Inventory page should show (.*) product$/,async(noOfProducts)=>{
    const eleArr = await $$("//div[@class='inventory_item_name']")
    console.log('no of elements - > ',eleArr.length)
})

Then(/^Product price should be more than 200$/,async()=>{

    let productPrices = await $$("//div[@class='inventory_item_price']")
    let priceListArr=[]
    for(let i=0;i<productPrices.length;i++)
    {
        let productPric = await productPrices[i].getText()
        console.log('price is ', await productPrices[i].getText())
        priceListArr.push(productPric)
    }
    console.log(priceListArr);

    // let newValues = priceListArr.map((ele)=>parseInt(ele.replace("$","")))
    // console.log(newValues);

    let newValues = priceListArr.map((ele)=>+(ele.replace("$","")))
    console.log(newValues);

    let finalVal = newValues.filter((ele)=>ele>20)
    console.log(finalVal)
    
})


