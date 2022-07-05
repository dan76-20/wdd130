function join() {
    location.href="join.html";
}
document.querySelector('#mybutton').addEventListener("click", join);

function thanks() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    alert(`Thank you ` + firstname + `. We look forward to meeting you.`)
}