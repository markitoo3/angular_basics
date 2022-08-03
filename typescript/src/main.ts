import { Person } from './person';

const newPerson: Person = new Person('Tibi', 40);

console.log(newPerson.getName());
console.log(newPerson.getAge());



class User {
    public username: string;
    public static ip_adress: string = '192.168.1.1';
    private _email: string;  //"email?:" string vagy undefined VAGY  "string | undefined"
    private _password: string;



    constructor(username: string, email: string, password: string) {
        this.username = username;
        this._email = email;
        this._password = password;
    }
}

const user1 = new User('Lacika', 'a@b.c', 'asdasd');

// user1.username csak ezt éred el, a többi private

// User.ip_adress csak a Classon keresztül érhető el, példányból nem (static)