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
var Employee = /** @class */ (function () {
    function Employee(eName, eId, eDep) {
        this.empName = eName;
        this.empId = eId;
        this.empDep = eDep;
    }
    Employee.prototype.getDetails = function () {
        console.log("Employee name: " + this.empName + " Employee Id: " + this.empId + " and Department: " + this.empDep);
    };
    Employee.prototype.getName = function () {
        return this.empName;
    };
    Employee.prototype.getId = function () {
        return this.empId;
    };
    Employee.prototype.getDept = function () {
        return this.empDep;
    };
    return Employee;
}());
var empl = new Employee("Hrithik", 235, "DCM");
var emp2 = new Employee(empl.getName(), empl.getId(), empl.getDept());
empl.getDetails();
emp2.getDetails();
