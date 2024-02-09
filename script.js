var unit1 = document.querySelector(".unit12");
var unit2 = document.querySelector(".unit2");
var unit3 = document.querySelector(".unit3");
var check1 = document.querySelector(".check1");
var check2 = document.querySelector(".check2");
var check3 = document.querySelector(".check3");
function show1(){

    unit1.classList.replace("unit1", "unit12");
    check1.style.display = "block";
    check2.style.display = "none";
    check3.style.display = "none";
    unit2.classList.replace("unit122", "unit2");
    unit3.classList.replace("unit12", "unit3");
}
function show2(){

    unit2.classList.replace("unit2", "unit122");
    check1.style.display = "none";
    check2.style.display = "block";
    check3.style.display = "none";
    unit3.classList.replace("unit12", "unit3");
    unit1.classList.replace("unit12", "unit1");
}
function show3(){

    unit3.classList.replace("unit3", "unit12");
    check1.style.display = "none";
    check2.style.display = "none";
    check3.style.display = "block";
    unit2.classList.replace("unit122", "unit2");
    unit1.classList.replace("unit12", "unit1");
}