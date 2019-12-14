function validate(){
        var name = document.getElementById('name');
        var username = document.getElementById('username');
        var email = document.getElementById('email');
        var password = document.getElementById('pass');
        var confirm_password = document.getElementById('con-pass');
        if (name.value.trim() == "") {
            document.getElementById("inc-name").innerHTML = "Name field cannot be empty!";
            return false;
        
        }
        else{
            document.getElementById("inc-name").innerHTML = "";
        }
         if (username.value.trim() == "") {
            document.getElementById("inc-username").innerHTML = "Username field cannot be empty!";
            return false;
        }
        else if (username.value.trim().length < 7) {
            alert("!!!!");
            document.getElementById("inc-username").innerHTML = "Username should be more than 6 characters !";
            return false;
        }
        else{
             document.getElementById("inc-username").innerHTML = "";

        }
         if (email.value.trim() == "") {
            document.getElementById("inc-email").innerHTML = "Email field cannot be empty!";
            return false;
        }
        else
        {
             document.getElementById("inc-email").innerHTML = "";

        }
         if (password.value.trim() == "") {
            document.getElementById("inc-pass").innerHTML = "Password field cannot be empty!";
            return false;
        }
        else{
             document.getElementById("inc-pass").innerHTML = "";

        }
         if (confirm_password.value == "") {
            document.getElementById("inc-cpass").innerHTML = "Confirm Password field cannot be empty!";
            return false;
        }
        else{
             document.getElementById("inc-cpass").innerHTML = "";

        }
        return true;

}
