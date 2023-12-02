const loginUserEmail = document.querySelector("#login-email");
const loginUserPassword = document.querySelector("#login-password");
const loginUserButton = document.querySelector("#login-button");

const loginUserSucess = document.querySelector("#login-user-alert-sucess");
const loginUserError = document.querySelector("#login-user-alert-error");

let userLogged = {};

loginUserButton.addEventListener("click", (event) => {
  event.preventDefault();

  const login = {
    email: loginUserEmail.value,
    password: loginUserPassword.value,
  };

  const user = new UserService().loginUser(login.email);

  if (user === 404 || user.password !== login.password)
    loginUserError.style.display = "block";
  else {
    loginUserError.style.display = "none";
    loginUserSucess.style.display = "block";

    userLogged = user;
    window.location.replace("dashboardToDo.html");
    setTimeout(() => {
      loginUserSucess.style.display = "none";
    }, 1500);
  }
});
