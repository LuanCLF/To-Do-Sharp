const createUserName = document.querySelector("#register-name");
const createUserEmail = document.querySelector("#register-email");
const createUserPassword = document.querySelector("#register-password");
const createUserButton = document.querySelector("#register-button");

const createUserSucess = document.querySelector("#create-user-alert-sucess");
const createUserError = document.querySelector("#create-user-alert-error ");

createUserButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const user = {
    userName: createUserName.value,
    email: createUserEmail.value,
    password: createUserPassword.value,
  };

  const createUser = new UserService().registerUser(user);

  if (createUser === 409) {
    createUserSucess.style.display = "none";
    createUserError.style.display = "block";
  } else {
    createUserError.style.display = "none";
    createUserSucess.style.display = "block";

    setTimeout(() => {
      createUserSucess.style.display = "none";
    }, 1500);
  }
});

const loginUserEmail = document.querySelector("#login-email");
const loginUserPassword = document.querySelector("#login-password");
const loginUserButton = document.querySelector("#login-button");

const loginUserSucess = document.querySelector("#login-user-alert-sucess");
const loginUserError = document.querySelector("#login-user-alert-error");

loginUserButton.addEventListener("click", (event) => {
  event.preventDefault();

  const login = {
    email: loginUserEmail.value,
    password: loginUserPassword.value,
  };

  const { index, user } = new UserService().loginUser(login.email);

  if (user === 404 || user.password !== login.password)
    loginUserError.style.display = "block";
  else {
    loginUserError.style.display = "none";
    loginUserSucess.style.display = "block";

    setIdTaskController(index);

    new UserService().setUserLoginName(user.userName);

    window.location.assign("./src/pages/dashboardToDo.html");

    setTimeout(() => {
      loginUserSucess.style.display = "none";
    }, 1500);
  }
});
