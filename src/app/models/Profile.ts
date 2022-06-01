export default class Profile{
    firstName: string = ""
    lastName: string = ""
    birthDate: Date = new Date()

    constructor(firstName: string,lastName: string,birthDate: Date){
        this.firstName=firstName
        this.lastName=lastName
        this.birthDate=birthDate
    }
}