import * as testMethod from "./controller_user.ts"
async function testFunction()
{
    //let retData = await getAllUsers();
    //console.log("AllUSers:");
    //console.log(retData)
    let data = await testMethod.getSpecificUser(129405830583205);
    console.log("specificUser:");
    console.log(data);
}
async function testFunctions2()
{
    let tempVal = 1097895652171076482;
    console.log("testfunction 2 ran")
    console.log(testMethod.updateUser(tempVal,"Ben",true,["Balls","Men","Green"],["SFDKJSEFJEWRE","WEFJEWFEJEWR","EWFINEWF"],[]))
}
