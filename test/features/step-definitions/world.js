import { setWorldConstructor } from "@wdio/cucumber-framework";


class CustomWorld{
    appid
    testid    
    constructor(){
        this.appid="",
        this.testid=""
    }
}
setWorldConstructor(CustomWorld)