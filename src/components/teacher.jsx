import { Person } from "./person01";


export class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
        teach(){
            console.log ("teach");
            }
}
