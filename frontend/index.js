var submitBtn = document.getElementsByClassName("btn-submit")[0];
var submitBtnClicked;

var empName = document.getElementById("ename");
var empId = document.getElementById("eid");
var empDate = document.getElementById("joindate");
var empExp = document.getElementById("experience");


var nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/
var empIdRegex = /^E-[0-9]+$/i
var experienceRegex = /^[0-9]{1,2}$|^[0-9]{1,2}.[0-9]{1}$/
var date30DaysRegex = /^([0-2][0-9]|30)\/(04|06|09|11)\/[0-9]{4}$/
var date31DaysRegex = /^([0-2][0-9]|3[0-1])\/(01|03|05|07|08|10|12)\/[0-9]{4}$/
var date28DaysRegex = /^([0-1][0-9]|2[0-8])\/(02)\/[0-9]{4}$/
// var joinDateRegex = /^[0-2][0-9]$/
// console.log(date30Days.exec("30/04/2020"))
// console.log(date31Days.exec("31/05/2020"))
// console.log(date28Days.exec("28/02/2020"))


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let valid = true;
    let ename = empName.value;
    let eid = empId.value;
    let experience = empExp.value;
    let joindate = empDate.value;

    if(!nameRegex.exec(ename) || !empIdRegex.exec(eid) || !(experienceRegex.exec(experience)) 
        || !(date30DaysRegex.exec(joindate) || date28DaysRegex.exec(joindate) || date31DaysRegex.exec(joindate))) {
        valid = false;
    }

    if(!submitBtnClicked && !valid) {
        alert("Enter details correctly")
    }

    if(!submitBtnClicked && valid) {
        console.log("Clicked")
        event.target.style.backgroundColor = "grey";
        
        submitBtnClicked = setTimeout(() => {
            submitBtnClicked = undefined;
            event.target.style.backgroundColor = "#03AEEE";
        }, 2000)
    }
})
