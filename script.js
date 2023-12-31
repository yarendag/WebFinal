const courses = [{id: 1, name: "Database Management System", pointscale: 10, ects: 1, students: []},
{id: 2, name: "Computer Networks", pointscale: 10, ects: 2, students: []},
{id: 3, name: "Web Development Fundamentals", pointscale: 7, ects: 2, students: []},
{id: 4, name: "Data Structures and Algorithms", pointscale: 7, ects: 3, students: []},
{id: 5, name: "Software Engineering Principles", pointscale: 7, ects: 2, students: []}];
const students = [{ id: 1, name: "Yaren", surname: "Dağ", courses: [] },
{ id: 2, name: "John", surname: "Doe", courses: [] },
{ id: 3, name: "Alice", surname: "Smith", courses: [] },
{ id: 4, name: "Bob", surname: "Johnson", courses: [] },
{ id: 5, name: "Eva", surname: "Brown", courses: [] },
{ id: 6, name: "Michael", surname: "Davis", courses: [] },
{ id: 7, name: "Olivia", surname: "Miller", courses: [] },
{ id: 8, name: "Daniel", surname: "Wilson", courses: [] },
{ id: 9, name: "Sophia", surname: "Moore", courses: [] },
{ id: 10, name: "Matthew", surname: "Taylor", courses: [] },
{ id: 11, name: "Emma", surname: "Anderson", courses: [] },
{ id: 12, name: "Christopher", surname: "Harris", courses: [] },
{ id: 13, name: "Ava", surname: "Martin", courses: [] },
{ id: 14, name: "Andrew", surname: "Thompson", courses: [] },
{ id: 15, name: "Mia", surname: "White", courses: [] },
{ id: 16, name: "Ethan", surname: "Clark", courses: [] },
{ id: 17, name: "Isabella", surname: "Allen", courses: [] },
{ id: 18, name: "William", surname: "Hall", courses: [] },
{ id: 19, name: "Abigail", surname: "Adams", courses: [] },
{ id: 20, name: "James", surname: "Mitchell", courses: [] },
{ id: 21, name: "Sofia", surname: "Young", courses: [] },
{ id: 22, name: "Alexander", surname: "Evans", courses: [] },
{ id: 23, name: "Ella", surname: "Turner", courses: [] },
{ id: 24, name: "Benjamin", surname: "Baker", courses: [] },
{ id: 25, name: "Amelia", surname: "Hill", courses: [] },
{ id: 26, name: "Henry", surname: "Green", courses: [] },
{ id: 27, name: "Charlotte", surname: "Cooper", courses: [] },
{ id: 28, name: "Liam", surname: "Ward", courses: [] },
{ id: 29, name: "Chloe", surname: "Kelly", courses: [] },
{ id: 30, name: "Sebastian", surname: "Barnes", courses: [] },
{ id: 31, name: "Lily", surname: "Fisher", courses: [] },
{ id: 32, name: "Jackson", surname: "Parker", courses: [] },
{ id: 33, name: "Grace", surname: "Mitchell", courses: [] },
{ id: 34, name: "Aiden", surname: "Price", courses: [] },
{ id: 35, name: "Zoe", surname: "Wright", courses: [] },
{ id: 36, name: "Lucas", surname: "Carter", courses: [] },
{ id: 37, name: "Nora", surname: "Ferguson", courses: [] },
{ id: 38, name: "Caleb", surname: "Simmons", courses: [] },
{ id: 39, name: "Madison", surname: "Reed", courses: [] },
{ id: 40, name: "Gabriel", surname: "Morris", courses: [] },
{ id: 41, name: "Aria", surname: "Harrison", courses: [] },
  { id: 42, name: "Elijah", surname: "Murray", courses: [] },
  { id: 43, name: "Scarlett", surname: "Cole", courses: [] },
  { id: 44, name: "Logan", surname: "Fletcher", courses: [] },
  { id: 45, name: "Addison", surname: "Hansen", courses: [] },
  { id: 46, name: "Nicholas", surname: "Dixon", courses: [] },
  { id: 47, name: "Eleanor", surname: "Bishop", courses: [] },
  { id: 48, name: "Dylan", surname: "McCarthy", courses: [] },
  { id: 49, name: "Leah", surname: "Graham", courses: [] },
  { id: 50, name: "Zachary", surname: "Owens", courses: [] },
  { id: 51, name: "Penelope", surname: "Mason", courses: [] },
  { id: 52, name: "Nathan", surname: "Reyes", courses: [] },
  { id: 53, name: "Hannah", surname: "Olson", courses: [] },
  { id: 54, name: "Wyatt", surname: "Sullivan", courses: [] },
  { id: 55, name: "Bella", surname: "Barnett", courses: [] },
  { id: 56, name: "Isaac", surname: "Franklin", courses: [] },
  { id: 57, name: "Violet", surname: "Briggs", courses: [] },
  { id: 58, name: "Carter", surname: "Sherman", courses: [] },
  { id: 59, name: "Claire", surname: "Fleming", courses: [] },
  { id: 60, name: "Gabriel", surname: "Pierce", courses: [] },
  { id: 61, name: "Mila", surname: "Simpson", courses: [] },
  { id: 62, name: "Jayden", surname: "Webster", courses: [] },
  { id: 63, name: "Stella", surname: "Nichols", courses: [] },
  { id: 64, name: "Cameron", surname: "Gordon", courses: [] },
  { id: 65, name: "Audrey", surname: "Russell", courses: [] },
  { id: 66, name: "Landon", surname: "Porter", courses: [] },
  { id: 67, name: "Savannah", surname: "Gill", courses: [] },
  { id: 68, name: "Owen", surname: "Fisher", courses: [] },
  { id: 69, name: "Skylar", surname: "Dunn", courses: [] },
  { id: 70, name: "Brooks", surname: "Wade", courses: [] },
  { id: 71, name: "Aubrey", surname: "Hampton", courses: [] },
  { id: 72, name: "Gavin", surname: "Holmes", courses: [] },
  { id: 73, name: "Layla", surname: "Morrison", courses: [] },
  { id: 74, name: "Connor", surname: "Baldwin", courses: [] },
  { id: 75, name: "Alexa", surname: "Gregory", courses: [] },
  { id: 76, name: "Josiah", surname: "Mills", courses: [] },
  { id: 77, name: "Aaliyah", surname: "Chapman", courses: [] },
  { id: 78, name: "Ezra", surname: "Floyd", courses: [] },
  { id: 79, name: "Taylor", surname: "Henderson", courses: [] },
  { id: 80, name: "Lucy", surname: "Matthews", courses: [] }];
const studentCourses = [];

function starterfunctions(){
    createCourseChooseList();
    createCourseTable(courses);
    createStudentChooseList();
    createStudentTable(students);
    addCourses();
}
// Iterates through the courses array and adds each course to the UI
function addCourses(){
courses.forEach(course => {
let id = course.id;
let name = course.name;
let pointScale = course.pointscale;
let Ects= course.ects;
createCourse(id, name, pointScale, Ects);
});
}
// Creates a new course object with the provided parameters
function createCourse(id, name, pointscale, ects){
    return {
        id: id,
        name: name,
        pointscale: pointscale,
        ects: ects,
        students: []
    };
    
}
// Creates a new student object with the provided parameters
function createStudent(id, name, surname){
    return{
        id: id,
        name: name,
        surname: surname,
        courses: []
    };
}
// Creates a new student course object with the provided parameters
function createStudentCourse(student, course, midtermScore, finalScore, pointScale){
    return {
        student: student,
        course: course,
        midtermScore: midtermScore,
        finalScore: finalScore,
        letterGrade: calculateLetterGrade(midtermScore, finalScore, pointScale)
    };
    
}
// Calculates and returns the letter grade based on midterm and final scores
function calculateLetterGrade(midtermScore, finalScore, pointScale){
    midtermScore = parseInt(midtermScore);
    finalScore = parseInt(finalScore);
    let result = (4* midtermScore + 6* finalScore) / 10;
    pointScale =parseInt(pointScale);
    switch (pointScale) {
        case 7: 
            if(result >= 93){
                return "A";
            }
            else if(result >= 85){
                return "B";
            }
            else if(result >= 77){
                return "C";
            }
            else if(result >= 70){
                return "D";
            }
            else {
                return "F";
            }
        case 10: 
        if(result >= 90){
            return "A";
        }
        else if(result >= 80){
            return "B";
        }
        else if(result >= 70){
            return "C";
        }
        else if(result >= 60){
            return "D";
        }
        else {
            return "F";
        }
        default:
            break;
    }
}

        /*  COURSE PART   */

// Populates the course selection dropdown in the UI
function createCourseChooseList() {
    const selectElement = document.querySelector("#selectCourse");
    selectElement.innerHTML = `<option value="all">All</option>`; // Add the "All" option first
  
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const option = document.createElement("option");
      option.value = course.id;
      option.text = `${course.id} - ${course.name}`;
      selectElement.appendChild(option); // Append each option to the select element
    }
  }
// Handles the logic for adding a new course
  function addCourse(event){
    event.preventDefault();

    let id = document.getElementById("courseId").value;
    let name = document.getElementById("courseName").value;
    let pointScale = document.getElementById("PointScale").value;
    let Ects= document.getElementById("Ects").value;

    if(id == "" || name == "" || pointScale == "" || Ects == ""){
        alert("Please fill the fields");
        return;
    }
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if(course.id == id){
            alert("Course already exist");
            return;
        }
        
    }
    let course = createCourse(id, name, pointScale, Ects);
    courses.push(course);
    console.log(course);
    let courseList = [];
    courseList.push(course);
    createCourseTable(courseList);
    createCourseChooseList();
  }

// Handles the logic for updating an existing course
  function updateCourse(event){
    event.preventDefault();
    let id = document.getElementById("courseId").value;
    let name = document.getElementById("courseName").value;
    let pointScale = document.getElementById("PointScale").value;
    let Ects= document.getElementById("Ects").value;

    if(id == "" || name == "" || pointScale == "" || Ects == ""){
        alert("Please fill the fields");
        return;
    }
    let course = courses.find(course => course.id == id);
    course.name = name;
    course.pointScale = pointScale;
    course.ects = Ects; 
    let courseList = [];
    courseList.push(course);
    createCourseTable(courseList);
    course.students.forEach(student => {
    let studentCourse = studentCourses.find(studentCourse => studentCourse.course.id == id && studentCourse.student.id == student.id);
    if(studentCourse !== undefined){
        studentCourse.course.pointScale = pointScale;
        studentCourse.console.ects = Ects;
        studentCourse.letterGrade = calculateLetterGrade(studentCourse.midtermScore, studentCourse.finalScore, course.pointScale);
    }
});
    createCourseChooseList();
  }
// Handles the logic for deleting a course
  function deleteCourse(id){
    let course = courses.find(course => course.id == id);
    courses.splice(courses.indexOf(course), 1);
    createCourseTable(courses);
    createCourseChooseList();
    studentCourses.forEach(studentCourse => {
        if(studentCourse.course.id == id){
            studentCourses.splice(studentCourses.indexOf(studentCourse), 1);
        }
    });
  }
// Creates and populates the course table in the UI
  function createCourseTable(courseList){
    document.querySelector(".ResultHeader").innerHTML= "Courses"

    document.querySelector("#TableResults").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PointScale</th>
            <th>Ects</th>
            <th>Number of Students</th>
            <th>Student</th>
            <th>Delete</th>
        </tr>
    `
    for (let i = 0; i< courseList.length; i++) {
      let course = courseList[i];
      document.querySelector("#TableResults").innerHTML += `
        <tr>
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.pointscale}</td>
            <td>${course.ects}</td>
            <td>${course.students.length}</td>
            <td><button class="btn" onclick="showStudentsofCourse('${course.id}')">Students</button></td>
            <td><button class="btn" onclick="deleteCourse('${course.id}')">Delete</button></td>
        </tr>

      `;
    }
}

// Shows the students enrolled in a specific course
function showStudentsofCourse(courseId){
    let course = courses.find(course => course.id == courseId);
    let studentList = [];
    console.log(course);
    course.students.forEach(student => {
        studentList.push(student);
    });
    createStudentsofCourseTable(studentList, course);
}
// Creates and populates the table of students for a specific course
function createStudentsofCourseTable(studentList, course){
    document.querySelector(".ResultHeader").innerHTML= "Students of the course: " + course.name;

    document.querySelector("#TableResults").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Number of Courses</th>
            <th>Midterm Score</th>
            <th>Final Score</th>
            <th>Letter Grade</th>
            <th>Courses</th>
            <th>Delete</th>
        </tr>
    `;

    for (let i = 0; i< studentList.length; i++) {
        let student = studentList[i];
        let studentCourse = studentCourses.find(studentCourse => studentCourse.id == student.id)
        document.querySelector("#TableResults").innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.courses.length}</td>
            <td>${studentCourse.midtermScore}</td>
            <td>${studentCourse.finalScore}</td>
            <td>${calculateLetterGrade(studentCourse.midtermScore, studentCourse.finalScore, course.pointScale)}</td>
            <td><button class="btn" onclick="showCoursesOfStudent('${student.id}')">Courses</button></td>
            <td><button class="btn" onclick="deleteStudentofCourse('${student.id}, ${course.id}')">Delete</button></td>
        </tr>
        `;
    }
}
// Handles the logic for deleting a student from a course
function deleteStudentofCourse(studentId, courseId){
    let student = students.find(student => student.id == studentId);
    if(student == undefined){
        alert("Student not exists!");
        return;
    }

    let course = courses.find(course => course.id == courseId);
    if(course == undefined){
        alert("Course not exists!");
        return;
    }

    let studentCourse = studentCourses.find(studentCourse => studentCourse.student.id == studentId && studentCourse.course.id == courseId);
    if(studentCourse == undefined){
        alert("Student not taking this course");
        return;
    }
    studentCourse.splice(studentCourses.indexOf(studentCourse), 1);
    student.courses.splice(student.courses.indexOf(lecture), 1);
    course.students.splice(course.students.indexOf(student), 1);
    createStudentTable(students);

}

// Event listener for course selection dropdown
document.querySelector("#selectCourse").addEventListener("change", function() {
    const selectedCourseId = this.value;
    const filteredCourses = selectedCourseId === "all" ? courses : courses.filter(course => course.id === selectedCourseId);
    createCourseTable(filteredCourses);
  });


        /*   STUDENT PART    */
// Populates the student selection dropdown in the UI
function createStudentChooseList() {
    const selectElement = document.querySelector("#selectStudent");
    selectElement.innerHTML = `<option value="all">All</option>`; // Add the "All" option first

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const option = document.createElement("option");
        option.value = student.id;
        option.text = `${student.id} - ${student.name}`;
        selectElement.appendChild(option); // Append each option to the select element
}
}

// Handles the logic for adding a new student
function addStudent(event){
    event.preventDefault();

    let id = document.getElementById("studentID").value;
    let name = document.getElementById("studentName").value;
    let surname = document.getElementById("studentSurname").value;

    if(id == "" || name == "" || surname == ""){
        alert("Please fill all the fields");
        return;
    }
    for (let i = 0; i < students.length; i++) {
        if(students[i].id == id){
            alert("Course already exists!");
            return;
        }  
    }

    let student = createStudent(id, name, surname);
    students.push(student);
    let studentList = [];
    studentList.push(student);
    createStudentTable(studentList);
    createStudentChooseList();
}


// Handles the logic for updating an existing student
function updateStudent(event){
    event.preventDefault();
    let id = document.getElementById("studentID").value;
    let name = document.getElementById("studentName").value;
    let surname = document.getElementById("studentSurname").value;

    if(id == "" || name == "" || surname == ""){
        alert("Please fill all the fields");
        return;
    }
    let student = students.find(student => student.id == id);
    student.name = name;
    student.surname = surname;
    let studentList = [];
    studentList.push(student);
    createStudentTable(studentList);
    createStudentChooseList();
  }

// Handles the logic for deleting a student
  function deleteStudent(id){
    let student = students.find(student => student.id == id);
    students.splice(students.indexOf(student), 1);

    createStudentChooseList();
    createStudentTable(students);
    studentCourses.forEach(studentCourse => {
        if(studentCourse.student.id == id){
            studentCourses.splice(studentCourses.indexOf(studentCourse), 1);
        }
    });
  }
  // Creates and populates the student table in the UI
function createStudentTable(studentList){
    document.querySelector(".ResultHeader").innerHTML= "Student"

    document.querySelector("#TableResults").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Number of Courses</th>
            <th>GPA</th>
            <th>Courses</th>
            <th>Delete</th>
        </tr>
    `;

    for (let i = 0; i< studentList.length; i++) {
        let student = studentList[i];
        document.querySelector("#TableResults").innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.courses.length}</td>
            <td>${calculateGPA(student)}</td>
            <td><button class="btn" onclick="showCoursesOfStudent('${student.id}')">Courses</button></td>
            <td><button class="btn" onclick="deleteStudent('${student.id}')">Delete</button></td>
        </tr>
        `;
    }

}
// Shows the courses enrolled by a specific student
function showCoursesOfStudent(studentId){
    let student = students.find(student => student.id == studentId);
    let courseList = [];
    student.courses.forEach(course => {
        courseList.push(course);
    });
    createCoursesofStudentTable(courseList, student);
}
// Creates and populates the table of courses for a specific student
function createCoursesofStudentTable(courseList, student){

    document.querySelector(".ResultHeader").innerHTML= "Courses of the student:" + student.name;

    document.querySelector("#TableResults").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PointScale</th>
            <th>Ects</th>
            <th>Number of Students</th>
            <th>Student</th>
            <th>Delete</th>
        </tr>
    `
    for (let i = 0; i< courseList.length; i++) {
      let course = courseList[i];
      document.querySelector("#TableResults").innerHTML += `
        <tr>
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.pointscale}</td>
            <td>${course.ects}</td>
            <td>${course.students.length}</td>
            <td><button class="btn" onclick="showStudentsofCourse('${course.id}')">Students</button></td>
            <td><button class="btn" onclick="deleteCourseOfStudent('${student.id},${course.id}')">Delete</button></td>
        </tr>

      `;
    }

}
// Handles the logic for deleting a course from a student
function deleteCourseOfStudent(studentId, courseId){
    let course = courses.find(course => course.id == courseId);
    if(student == undefined){
        alert("Course not exists!");
        return;
    }

    let student = students.find(student => student.id == studentId);
    if(student == undefined){
        alert("Student not exists!");
        return;
    }

    let studentCourse = studentCourses.find(studentCourse => studentCourse.student.id == studentId && studentCourse.course.id == courseId);
    if(studentCourse == undefined){
        alert("Student not taking this course");
        return;
    }
    studentCourse.splice(studentCourses.indexOf(studentCourse), 1);
    student.courses.splice(student.courses.indexOf(lecture), 1);
    course.students.splice(course.students.indexOf(student), 1);
    createStudentTable(students);

}
// Calculates and returns the GPA for a specific student
function calculateGPA(student){
    let totalGrade = 0;
    let totalEcts = 0;
    let midtermScore = 0;
    let finalScore = 0;
    studentCourses.forEach(studentCourse => {
        if(studentCourse.student.id == student.id){
            midtermScore = parseInt(studentCourse.midtermScore);
            finalScore = parseInt(studentCourse.finalScore);
            ects =parseInt(studentCourse.course.ects);
            midtermScore = (midtermScore /25) * 4;
            finalScore = (finalScore / 25) * 6;
            totalGrade += ((midtermScore + finalScore) * ects) /10;
            totalEcts += ects;
            console.log(totalEcts);
        }
        
    });
    if(totalEcts == 0){
        return null;
    }
    const GPA = (totalGrade / totalEcts).toFixed(2);
    return GPA;

}
// Event listener for student selection dropdown
document.querySelector("#selectStudent").addEventListener("change", function() {
    const selectedStudentId = this.value;
    const filteredStudents = selectedStudentId === "all" ? students : students.filter(student => student.id === selectedStudentId);
    createStudentTable(filteredStudents);
});

/*          STUDENT COURSE PARTTT */
// Adds a student to a course with provided scores
function addStudentToCourse(student, course, midtermScore, finalScore){
    course.students.push(student);
    student.courses.push(course);
    let studentCourse = createStudentCourse(student, course, midtermScore, finalScore, course.pointScale);
    studentCourses.push(studentCourse);
}
// Handles the logic for adding a student to a course from the UI
function addStudentToCourseBtn(event){
    event.preventDefault();
    let studentID = document.getElementById("studentID").value;
    let courseID = document.getElementById("courseID").value;
    let midtermScore = document.getElementById("midtermScore").value;
    let finalScore = document.getElementById("finalScore").value;

    if(studentID == "" || courseID == "" || midtermScore == "" || finalScore == ""){
        alert("Please fill all the fields");
        return;
    }
    for (let i = 0; i < studentCourses.length; i++) {
        let studentCourse = studentCourses[i];
        if(studentCourse.student.id == studentID && studentCourse.course.id == courseID){
            alert("Student already added!");
            return;
        }  
    }
    let checkstudent = students.find(student => student.id == studentID);
    let checkcourse = courses.find(course => course.id == courseID);
    if(checkstudent == undefined || checkcourse == undefined){
        alert("Student or course does not exists ");
        return;
    }
    if(studentID < 0 || courseID < 0){
        alert("Please enter an ID");
    }
    if(midtermScore < 0 || midtermScore > 100 || finalScore < 0 || finalScore > 100) { 
        alert("Please enter a number between 0 and 100");
    }

    let student = students.find(student => student.id == studentID);
    if(student == undefined){
        alert("Student not exist!");
        return;
    }

    let course = courses.find(course => course.id == courseID);
    if(course == undefined){
        alert("Course not exist!");
        return;
    }

    addStudentToCourse(student, course, midtermScore, finalScore);
    let studentList = [];
    studentList.push(student);
    createStudentTable(studentList);

}
// Handles the logic for updating scores of a student in a course from the UI
function updateStudentToCourseBtn(event){
    event.preventDefault();
    let studentID = document.getElementById("studentID").value;
    let courseID = document.getElementById("courseID").value;
    let midtermScore = document.getElementById("midtermScore").value;
    let finalScore = document.getElementById("finalScore").value;

    if(studentID == "" || courseID == "" || midtermScore == "" || finalScore == ""){
        alert("Please fill all the fields");
        return;
    }
    let checkstudent = students.find(student => student.id == studentID);
    let checkcourse = courses.find(course => course.id == courseID);
    if(checkstudent == undefined || checkcourse == undefined){
        alert("Student or course does not exists ");
        return;
    }
    if(studentID < 0 || courseID < 0){
        alert("Please enter an ID");
    }
    if(midtermScore < 0 || midtermScore > 100 || finalScore < 0 || finalScore > 100) { 
        alert("Please enter a number between 0 and 100");
    }

    let student = students.find(student => student.id == studentID);
    if(student == undefined){
        alert("Student not exist!");
        return;
    }

    let course = courses.find(course => course.id == courseID);
    if(course == undefined){
        alert("Course not exist!");
        return;
    }

    let studentCourse = studentCourses.find(studentCourse => studentCourse.student.id == studentID && studentCourse.course.id == courseID);
    if(studentCourse == undefined){
        alert("Student not in this course!");
        return;
    }
    studentCourse.midtermScore = midtermScore;
    studentCourse.finalScore = finalScore;
    studentCourse.letterGrade = calculateLetterGrade(midtermScore, finalScore, course.pointScale);
    let studentList = [];
    studentList.push(student);
    createStudentTable(studentList);

}
// Handles the logic for searching and displaying students by name
function searchStudentBtn(event){
    event.preventDefault();
    let studentName = document.getElementById("searchStudentInput").value;
    if(studentName == ""){
        alert("Please fill the required space");
        return;
    }

    let studentList = [];
    students.forEach(student => {
        if(student.name.toLowerCase().includes(studentName.toLowerCase())){
            studentList.push(student);
        }
    });
    createStudentTable(studentList);

}
// Handles the logic for searching and displaying courses by name
function searchCourseBtn(event){
    event.preventDefault();
    let courseName = document.getElementById("searchCourseInput").value;
    if(courseName == ""){
        alert("Please fill the required space");
        return;
    }

    let courseList = [];
    courses.forEach(course => {
        if(course.name.toLowerCase().includes(courseName.toLowerCase())){
            courseList.push(course);
        }
    });
    createCourseTable(courseList);

}

