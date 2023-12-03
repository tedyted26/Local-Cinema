/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//NOT LOGGED INDEX STUFF

//Populate table of shows
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById('tableBody');

  // Use the data from data.js
  SHOWS.forEach(item => {
      const row = document.createElement('tr');
      const [date, time] = item.datetime.split(' ');
      row.innerHTML = `
      <td>
          <div class="thumbnail-container">
              <div class="thumbnail">
                  <img src="https://source.unsplash.com/50x50/?random=${item.showID}" alt="Thumbnail">
              </div>
              <span>${item.name}</span>
          </div>
      </td>
      <td>${item.description}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${item.price}kr</td>
      <td>${item.room}</td>
      `;
      tableBody.appendChild(row);
  });
});

// Manage Login
function login() {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;

  const user = USERS.find(u => u.email === email);
  // Check if the user exists
  if (user) {
    // Check password
    if (password === user.password) {
        if (user.super) {
            // Redirect to super index page
            window.location.href = 'index.html';
        } else if (user.admin) {
            // Redirect to admin index page
            window.location.href = 'index.html';
        } else {
            // Redirect to user index page
            window.location.href = 'index.html';
        }
    } else {
        alert('Invalid password. Please try again.');
    }
} else {
    alert('User not found. Please try again.');
}
}

// Manage register
function register() {
  var name = document.getElementById('inputName').value;
  var phone = document.getElementById('inputPhone').value;
  var date = document.getElementById('inputDate').value;
  var email = document.getElementById('inputEmailR').value;
  var password = document.getElementById('inputPasswordR').value;
  var confirmPassword = document.getElementById('inputPasswordConfirm').value;

  if (name === '' || phone === '' || date === '' || email === '' || password === '' || confirmPassword === '') {
      alert('All fields must be filled out');
      return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return false;
  }

  if (password !== confirmPassword) {
      alert('Password and Confirm Password must match');
      return false;
  }

  return true;
}


document.getElementById('registerBtn').addEventListener('click', function () {
  if (register()) {
      $('#registerModal').modal('hide');
      alert("Request sent. Account on it's way!");
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const createShowForm = document.getElementById('createShowForm');

    createShowForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const showTitle = document.getElementById('showTitle').value;
        const showDescription = document.getElementById('showDescription').value;
        const showTime = document.getElementById('showTime').value;
        const showPrice = document.getElementById('showPrice').value;
        const showRoom = document.getElementById('showRoom').value;
        
        const newShowId = SHOWS.length > 0 ? SHOWS[SHOWS.length - 1].showID + 1 : 1;

        const newShow = {
            showID: newShowId,
            name: showTitle,
            description: showDescription,
            datetime: showTime,
            price: parseFloat(showPrice),
            room: showRoom
        };

        SHOWS.push(newShow);

        // Clear the form after submission
        createShowForm.reset();

        // Redirect to the admin view after successful creation
        window.location.href = 'admin.html'; // Adjust if the admin page has a different path
    });
});
