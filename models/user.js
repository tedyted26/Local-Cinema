class User {
    constructor(userID, name, email, password, birthdate, phone, isSuper, isAdmin) {
      this.userID = userID;
      this.name = name;
      this.email = email;
      this.password = password;
      this.birthdate = birthdate;
      this.phone = phone;
      this.isSuper = isSuper;
      this.isAdmin = isAdmin;
    }

    //Saves the user into the json
    createUser(){
      // Checks if user already exists
      if (USERS.find(u => u.email === this.email)){
        alert("This account already exists!");
        return false
      }
      newUser = {
        "userID": this.userID,
        "name": this.name,
        "email": this.email,
        "password": this.password,
        "birthdate": this.birthdate,
        "phone": this.phone,
        "isSuper": this.isSuper,
        "isAdmin": this.isAdmin
    };
      // Add the new user to the array
      USERS.push(newUser);
  
      return true
    }
  }