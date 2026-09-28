//ques 1
// create a sign up form and display form data in your web page on submission.


function showData(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    document.getElementById("result").innerHTML =
    "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Password: " + password + "<br>"
}

//ques 2
// suppose in your web page there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on "read more" button, full detail of that particular item will be displayed.


function readMore(){
    document.getElementById("more").style.display = "block";
}

