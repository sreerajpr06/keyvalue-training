
document.getElementsByClassName("btn-submit")[0].addEventListener("click", (event) => {
    event.preventDefault();
})

var submitBtn = document.getElementsByClassName("btn-submit")[0];

submitBtn.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "green"
});

submitBtn.addEventListener("mouseup", (event) => {
    event.target.style.backgroundColor = "#03AEEE"
});
