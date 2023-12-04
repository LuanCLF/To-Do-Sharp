class UserService {
  getLocalStorage() {
    let bank = JSON.parse(localStorage.getItem("bank"));

    if (!bank || bank.length < 1) {
      localStorage.setItem("bank", JSON.stringify([]));
      bank = [];
    }

    return bank;
  }

  setUserLoginName(name) {
    localStorage.setItem("user", JSON.stringify(name));
  }

  getUser(bank, email) {
    let index = "";
    const user = bank.filter((user, i) => {
      if (user.email === email) {
        index = i;
        return user;
      }
    });

    return { user: user[0], index };
  }

  loginUser(email) {
    const bank = this.getLocalStorage();
    const { user, index } = this.getUser(bank, email);

    if (!user) return 404;
    else return { user, index };
  }

  registerUser(createUser) {
    const bank = this.getLocalStorage();
    const { user } = this.getUser(bank, createUser.email);

    if (user) return 409;
    else {
      bank.push(createUser);

      localStorage.setItem("bank", JSON.stringify(bank));

      return 200;
    }
  }
}
