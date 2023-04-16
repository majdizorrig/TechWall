export class Personne {
  id:number;
  name:string;
  firstName:string;
  age:number;
  path:string;
  cin:number;
  job:string;


  constructor(id: number=0, name: string="", firstName: string="", age: number=0, path: string="", cin: number=0, job: string="") {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}

