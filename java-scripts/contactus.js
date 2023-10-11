const email = document.getElementById("email");
const phone = document.getElementById("phone");
const comment = document.getElementById("comment")
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", message, false);

function message() {
    if (email.value && phone.value && comment.value) {
        alert("Your form has been successfully submitted!\nHave a nice day!");
    } else {}
}