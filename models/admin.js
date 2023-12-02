class Admin extends User {
    constructor(userID, name, email, password, age, phone, isSuper, isAdmin) {
      super(userID, name, email, password, age, phone, isSuper, isAdmin);
    }
  
    createUser() {
    }
  }