export class User {
    name: string;
    password: string;
    id?: number;

    constructor(user: User) {
        this.name = user.name;
        this.password = user.password;
    }

    outPut() {
        console.log(this.name, this.password);
    }
}