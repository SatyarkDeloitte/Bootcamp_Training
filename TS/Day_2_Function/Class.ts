// class Student{
//     studCode: number;
//     studName: string;
//     constructor(code: number,name: string){
//         this.studName=name;
//         this.studCode=code;
//     }
//     getGrade():string{
//         return "A+";
//     }
// }

// const student = new Student(11,'John');
// const student_1 = new Student(12,'Jake');
// const student_2 = new Student(13,'James');
// console.log(student);
// console.log(student_1);
// console.log(student_2);

// console.log(student.getGrade());

// class Employee{

//     empName:string;
//     empId:number;
//     empDep:string;

//     constructor(eName:string, eId:number, eDep:string){
//         this.empName=eName;
//         this.empId=eId;
//         this.empDep=eDep;
//     }

//      getDetails():void{
//         console.log("Employee name: " +this.empName+" Employee Id: "+ this.empId+" and Department: "+ this.empDep);
//     }

//     getName():string{
//         return this.empName;
//     }

//     getId():number{
//         return this.empId;
//     }

//     getDept():string{
//         return this.empDep;
//     }
// }

// let empl = new Employee("Hrithik",235,"DCM");
// let emp2 = new Employee(empl.getName(),empl.getId(),empl.getDept());
// empl.getDetails();
// emp2.getDetails();


class SportsCar {
    color: string;
    model: string;

    constructor(model: string, color: string) {
      this.model = model;
      this.color = color;
    }
  }
  
  class Audi extends SportsCar {
    enginetype: string;
    price: number;
    constructor(model: string, color: string, enginetype: string, price: number) {
      super(model, color);
      this.enginetype = enginetype;
      this.price = price;
    }
  }
  
  let r8 = new Audi("Audi R8", "Grey", "3000cc", 10000);
  
  console.log(r8.model);
  console.log(r8.enginetype);
  console.log(r8.price);
