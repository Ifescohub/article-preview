
const shareBtn = document.querySelector(".share");
const icons = document.querySelector(".icons");
const shareIcon = document.querySelector(".share img");


//Show icon on mouse enter
shareBtn.addEventListener("mouseenter", ()=> {
    icons.classList.add("active");
    shareIcon.classList.add("active");
});


//Toggle icons as share button is clicked
shareBtn.addEventListener("click", ()=> {
    icons.classList.toggle("active");
    shareIcon.classList.toggle("active");
});