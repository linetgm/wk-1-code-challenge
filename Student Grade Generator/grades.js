let grade
//executes a prompt asking the user to input student's marks and assigning them the correct grade
function gradingSystem(){
    let number = prompt("Enter student's marks"); //input keyed in to prompt is returned as a string
    let mark = parseInt(number); //turns the returned string into a number 

  
    if (mark >= 80 && mark <= 100){
        grade = "A";
        console.log(mark)
        console.log(grade); 
    }
    else if(mark >= 60 && mark <= 79){
        grade = "B";
        console.log(mark)
        console.log(grade);
    }
     else if(mark >= 49 && mark <= 59){
        grade = "C";
        console.log(mark)
        console.log(grade)
    }
    else if(mark >= 40 && mark < 49){
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
        grade = "Grade not found, Invalid mark";
        console.log("Mark can only be between 0 to 100");
    }
    document.getElementById("results").innerHTML = `You grade: ${grade}`;
    return grade;     
}
gradingSystem()