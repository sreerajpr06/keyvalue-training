var submitBtn = document.getElementsByClassName("btn-submit")[0];
var submitBtnClicked;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if(!submitBtnClicked) {
        console.log("Clicked")
        event.target.style.backgroundColor = "grey";
        submitBtnClicked = setTimeout(() => {
            submitBtnClicked = undefined;
            event.target.style.backgroundColor = "#03AEEE";
        }, 2000)
    }
})



