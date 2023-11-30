class UserService {
  getLocalStorage() {
    let bank = JSON.parse(localStorage.getItem("bank"));

    if (!bank || bank.length < 1) {
      localStorage.setItem("bank", JSON.stringify([]));
      bank = [];
    }

    return bank;
  }

  getUser(bank, email) {
    const user = bank.filter((user) => {
      return user.email === email;
    });

    return user[0];
  }

  loginUser(email) {
    const bank = this.getLocalStorage();
    const user = this.getUser(bank, email);

    if (!user) return 404;
    else return user;
  }

  registerUser(user) {
    const bank = this.getLocalStorage();
    const userExist = this.getUser(bank, user.email);

    if (userExist) return 409;
    else {
      bank.push(user);

      localStorage.setItem("bank", JSON.stringify(bank));

      return 200;
    }
  }
}
