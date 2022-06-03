export default class Profile{
    id: number = 0
    firstName: string = ""
    lastName: string = ""
    birthDate: Date = new Date()
    gender : string =""
    password : string = ""
    role : string = ""

    constructor(firstName: string,lastName: string,birthDate: Date,gender:string, password : string , role : string){
        this.firstName=firstName
        this.lastName=lastName
        this.birthDate=birthDate
        this.gender=gender
        this.password = password
        this.role = role
    }
}