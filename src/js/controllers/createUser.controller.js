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
