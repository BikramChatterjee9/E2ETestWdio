import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig,{
    //All test env key value pairs
    environment:"Test",
    sauceurl:"https://www.saucedemo.com/v1/index.html"

})

