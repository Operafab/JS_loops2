
//create a Person class
// create a class Teacher 
//class teacher inherits from person
//teach method that has a subject parameter and prints a message
//override the getName method to return first and last name instead of just name


//person class 
class Person {
  constructor(name1,name2){
    this.firstName = name1;
    this.lastName = name2;
    
  }

  getName(){
  let fullName =  (`${this.firstName} ${this.lastName}`)
    return  fullName
  }

  speech(){
   console.log(`${this.firstName} can talk`)
  }
 
}

//teacher class that inherits from the person class
class Teacher extends Person {
  
  teach(subject){
    let subjects = subject
    console.log(`${this.firstName} can teach ${subjects}`)
  }

}

const teacher = new Teacher("Opera","Faboyinde")
console.log(teacher.getName())
teacher.speech()
teacher.teach("English")