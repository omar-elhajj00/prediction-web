function store(){

    // define the variables
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    } else {
        // save the Credentials in local storage
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        name.value = "";
        pw.value = "";
        alert('Your account has been created');
    }
}

//checking
function check() {
    // get the stored values
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    // define values
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if (userName.value == storedName && userPw.value == storedPw) {
        //redirect to the prediction page
        location.replace("../index.html");
    } else {
        //error
        alert('Error on login');
    }
}