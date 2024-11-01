
function validateForm() {
    // get the values of the input boxes
    var username = document.querySelector(" .username").value
    var password = document.querySelector(" .password").value


    // validate the username

    if (username.length == 0) {
        var username_error = document.querySelector(".username_error")
        username_error.style.display = "block"
        return false
    }


    // validate the password

    if (password.length == 0) {
        var password_error = document.querySelector(".password_error")
        password_error.style.display = "block"
        return false
    }

    // validate the password
}

