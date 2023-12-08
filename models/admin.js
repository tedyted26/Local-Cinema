class Admin extends User {
  constructor(userID, name, email, password, age, phone, isSuper, isAdmin) {
      super(userID, name, email, password, age, phone, isSuper, isAdmin);
  }

  createShow(title, description, datetime, price, room) {
      // Calculate the new show ID
      const newShowId = SHOWS.length > 0 ? SHOWS[SHOWS.length - 1].showID + 1 : 1;

      // Create a new show object
      const newShow = {
          showID: newShowId,
          name: title,
          description: description,
          datetime: datetime,
          price: parseFloat(price),
          room: room
      };

      // Add the new show to the SHOWS array
      SHOWS.push(newShow);
  }
}
