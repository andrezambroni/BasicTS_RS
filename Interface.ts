interface Person {
  id: number;
  name: string;
}

interface Teacher extends Person {
  // id: number,
  // name: string,
  subjects: string[];
}

interface Student extends Person {
  // id: number,
  // name: string,
  age: number;
}

let teacher: Teacher = {
  id: 1,
  name: "André",
  subjects: ["JavaScript", "TypeScript"],
};

let student: Student = { id: 2, name: "João", age: 23 };
