function registerFunc(e){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPass').value;
  var reg = document.getElementById('reg');
  //user
   
  var user =  {
     name: name,
     username: username,
     email: email,
     password: pass,
     confirmPass: confirm,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log(reg.innerHTML = "<p class='sucess'>You already have an account!</p>");
}
//login
function loginFunc(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
      result.innerHTML = "<p class='error'>wrong username</p>";
    }else if(username == data.username && pass == data.password){
      result.innerHTML = "<p id='correct'>Logged In please wait....</p>";
    }else{
      result.innerHTML = "<p class='error'>wrong password</p>";
    }

    setTimeout(() => document.querySelector(".error").remove(), 2000);
    setTimeout(() => document.querySelector("#correct").remove(), 2000);
}