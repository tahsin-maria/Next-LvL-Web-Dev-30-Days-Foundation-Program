//  {#fd1,10}
/*

Student Management System (CRUD)

--> Add a student with a unique ID that automatically increments.
--> Display all students in the array.
--> Find a student by their ID and display their information. If the student does not exist, print "404 not found".
--> Delete a student by ID. Remove the correct student from the array and display a confirmation message.

*/

let students = [
  { id: 101, name: "Rahim", age: 20, department: "CSE" },
  { id: 102, name: "Karim", age: 22, department: "EEE" },
  { id: 103, name: "Fahim", age: 21, department: "MTE" },
  { id: 104, name: "Nusrat", age: 19, department: "ECE" },
  { id: 105, name: "Sakib", age: 23, department: "BME" },
  { id: 106, name: "Tania", age: 20, department: "CSE" },
  { id: 107, name: "Imran", age: 22, department: "EEE" },
  { id: 108, name: "Mim", age: 21, department: "MSE" },
];

//  {#51a,21}
//add a student with unique id
const addStudent = (name, age, department) => {
  let newId;

  //ternery operator
  students.length
    ? (newId = students[students.length - 1].id + 1)
    : (newId = 101);

  let newStudent = {
    id: newId,
    name: name,
    age: age,
    department: department,
  };

  students.push(newStudent);
};

addStudent("Tahsin", 22, "ECE");
console.log(students); //display all students

//  {#dfc,27}
//find a student by id
const findStudent = (id) => {
  if (typeof id !== "number") {
    console.log("Please enter a valid number");
    return null;
  }

  let foundStudent = null; // not initialized as empty obj because an empty obj is also truthy in js
  let foundStudentIdx = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      foundStudent = students[i];
      foundStudentIdx = i;
      break;
    }
  }
  if (foundStudent) {
    console.log(`Student with id ${id} has been Found`);
    console.log(foundStudent);
    return foundStudentIdx;
  } else {
    console.log(`No student with id ${id} exists`);
    return null;
  }
};
findStudent(102);

//  {#122,21}
//update a students info using id
const updateStudent = (id, name, age, department) => {
  if (typeof id !== "number") {
    console.log("Please enter a valid number");
    return;
  }
  let studentIdx = findStudent(id);

  if (studentIdx === null) {
    console.log("Student Not Found");
    return;
  }

  students[studentIdx].name = name;
  students[studentIdx].age = age;
  students[studentIdx].department = department;

  console.log("Student Info Updated Successfully");
  console.log(students);
};
updateStudent(108, "Thor", 87, "ECE");

//  {#125,22}
//delete a student using their id
const deleteStudent = (id) => {
  if (typeof id !== "number") {
    console.log("Please enter a valid number");
    return;
  }
  let deleteStudentIdx = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      deleteStudentIdx = i;
      break;
    }
  }
  if (deleteStudentIdx !== -1) {
    students.splice(deleteStudentIdx, 1);
    console.log(`Student with id ${id} has been deleted`);
  } else {
    console.log(`Student with id ${id} not found`);
  }
};
deleteStudent(109);
console.log(students);
