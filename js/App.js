/*****************************The Beginning*******************************/

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const selectedList = document.querySelectorAll(".control li");
const selectedClass = document.querySelector(".control ul");

var sectionIndex = 0;

rightArrow.addEventListener("click", function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    makeIndex();                // The call back function
    selectedClass.children[sectionIndex].classList.add("selected");
   
});

leftArrow.addEventListener("click", function(){
    sectionIndex = (0 < sectionIndex ) ? sectionIndex - 1 : 0;
    makeIndex();                // The call back function
    selectedClass.children[sectionIndex].classList.add("selected");
   
});

//the section for the list selector buttons at the bottom
selectedList.forEach(function(indicator, idn){
    indicator.addEventListener("click", function(){
        sectionIndex = idn;
        makeIndex();        // The call back function
        indicator.classList.add("selected");
   
    });
});

// The call back function for refactoring
function makeIndex(){
    document.querySelector(".control .selected").classList.remove("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
};
/*****************************The End*******************************/