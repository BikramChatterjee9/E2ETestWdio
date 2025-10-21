import { use } from "react";
import page from "./page";
import chai from "chai";
import { error } from "winston";


class HomePage extends Page{
    constructor()
    {
        super()
    }

    get userNameInputBox() {return $(``)}
    get passwordInputBox() {return $(``)}
    get loginBtn() {return $(``)}

    async enterUsername(testid,username)
    {
        if(!username)
            throw error(`username is not valid ${username}`)
        try{
        username = username.trim()
        await this.typeInto(await this.userNameInputBox,username)
        }
        catch(err)
        {
            err.message = `error entering username ${err.username} ${err.message}`
            throw err
        }
    }

    async enterPassword(testid,password)
    {
        if(!password)
            throw error(`password is not valid`)
        try{
        username = username.trim()
        await this.typeInto(await this.passwordInputBox,password)
        }
        catch(err)
        {
            err.message = `error entering password ${err.message}`
            throw err
        }
    }

    async clickOnLoginBtn(testid)
    {
        try{
        await this.click(await this.loginBtn)
        }
        catch(err)
        {
            err.message = `error clicking ${err.message}`
            throw err
        }
    }


}

export default new HomePage()
