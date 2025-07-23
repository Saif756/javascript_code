function loggInUser(username = "sam"){
    if(!username){
       console.log("Plz enter the user name");
       return
    }
    return `${username} just logged in`
}
console.log(loggInUser("Saif"));
