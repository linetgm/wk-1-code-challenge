let grade
//asks the user to input student's grade

function gradingSystem(){
    let number = prompt("Enter student's marks"); 
    //input is returned as a string
    let mark = parseInt(number); 
    //makes the returned string become a number
    if (mark=79){
        grade = "A";
        console.log(mark)
        console.log(grade); 
    }
    else if(mark=60){
        grade = "B";
        console.log(mark)
        console.log(grade);
    }
     else if(mark=59){
        grade = "C";
        console.log(mark)
        console.log(grade)
    }
    else if(mark=49){
        grade = "D";
        console.log(mark)
        console.log(grade);
    }
    else if(mark < 40){
        grade = "E";
        console.log(mark)
        console.log(grade);
    }
    else if(mark > 100){
        grade = "grade not found";
        //marks are only between 0-100
        console.log("Marks can only be between 0 to 100");
    }
    document.getElementById("results").innerHTML = grade;
    return grade;     
}
gradingSystem()