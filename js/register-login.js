function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check() {
    // e.preventDefault();
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    // var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        console.log('zebata');
        // window.location.href = '../index.html';
        location.replace("../index.html");
    }else{
        alert('Error on login');
    }
}