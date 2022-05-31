export default class User {
    userName : String = ""
    password : String = ""
    role : String = ""

    constructor(userName:String, password:String, role:String){
        this.userName = userName;
        this.password = password
        this.role = role
    }
}