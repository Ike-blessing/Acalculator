// INPUTS
const dayinp = document.getElementById("day");
const monthinp = document.getElementById("month");
const yearinp = document.getElementById("year");

// OUTPUTS
const dayotp = document.getElementById("DD");
const monthotp = document.getElementById("mm");
const yearotp = document.getElementById("yy");

// FORM ELEMENT 
const form = document.querySelector("form");

// ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener("submit", handlesubmit);

const date = new date();
let day = date.getdate();
let month = 1 + date.getmonth();
let year = date.getfullyear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate(){
    const inputs = document.querySelectorAll("input");
    let validate = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if(dayinp.value > 31){
            i.style.borderColor = "red";
            dayinp.parentElement.querySelector("small").innerText = "invalid.";
            validator = false;
        } else if (monthinp.value > 12) {
            i.style.bordercolor = "red";
            monthinp.parentElement.querySelector("small").innerText = "must be a valid month."
            validator = false;
        } else if (yearinp.value > 2023){
            i.style.bordercolor = "red";
            dayinp.parentElement.querySelector("small").innerText = "must be a valid year.";
            validator = false;
        } else {
            i.style.bordercolor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        } if (dayinp.value > day) {
            day = day + month[month - 1];
            month = month - 1;
        }
        if (monthinp.value > month) {
            month = month + 12;
            year= year - 1;
        }

        const d = day - dayinp.value
        const m = day - monthinp.value;
        const y = day - yearinp.value;

        dayotp.innerHTML = d;
        monthotp.innerHTML = m;
        yearotp.innerHTML = y;
    })
    return validator;
    
    
}

// SAVING INPUT TO LOCAL STORAGE
localStorage.setItem(d ,m ,y);