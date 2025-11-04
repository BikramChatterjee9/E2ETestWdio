import request from "supertest"

// console.log(`type of request is ${typeof request}`)

// console.log(`length of request is ${request.length}`)

// console.log(`defination of request is ${request.toString()}`)

(async function GET() {
    let res = await request("https://reqres.in")
    .get("/api/users?page=2")
    .query({})
    .auth("","")
    .set("Content-Type","application/json")
    .set("Accept","application/json")
    console.log(`output is ${JSON.stringify(res.body)}`)
})()

async function GET(baseURL,token,endpoint,param) {
    if(!baseURL || !endpoint)
    {
        throw Error(`base url ${baseURL} and ${endpoint} are not valid`)
    }
    baseURL = baseURL.trim()
    endpoint=endpoint.trim()

    try{
    return await request(baseURL)
    .get(endpoint)
    .query(param)
    .auth(token,{type:'bearer'})
    .set("Content-Type","application/json")
    .set("Accept","application/json")
    }
    catch(err)
    {
        err.message = `error in get call ${endpoint}`
        throw err
    }
}

let payload = {
    email:"",
    password:""
}

async function POST(baseURL,token,endpoint,payload) {
    if(!baseURL || !endpoint)
    {
        throw Error(`base url ${baseURL} and ${endpoint} are not valid`)
    }
    baseURL = baseURL.trim()
    endpoint=endpoint.trim()

    try{
    return await request(baseURL)
    .post(endpoint)
    .auth(token,{type:'bearer'})
    .set("Content-Type","application/json")
    .set("Accept","application/json")
    .send(payload)
    }
    catch(err)
    {
        err.message = `error in post call ${endpoint}`
        throw err
    }
}

export default {GET,POST}
