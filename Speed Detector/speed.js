let speed;
let demerit;
//prompts the user to input speed
function speedLimit(){
    let input = prompt("Speed"); 
    //prompt is returned as a string 
    speed = parseInt(input);
    if (speed <= 70){
        let output = "Ok"
        console.log(output);
        return output;
    }
    //calculates demerit points
    else if (speed > 70){
        let difference = speed - 70;
        let div = difference / 5;
        demerit = (Math.floor(div)) * 1;
        console.log(`You have ${demerit} demerit points`);
        //if the demerit is greater than 12, the license is suspended
        if (demerit >= 12){
            console.log("License Suspended")
        }
    }
}
speedLimit()