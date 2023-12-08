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
// also used by logged_in_view_shows.html

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
      console.log('Row added, shows:', item);
  });
});

// logged_in_show_shifts.html
//Populate table of shifts
document.addEventListener("DOMContentLoaded", function () {
    const tableBodyShifts = document.getElementById('tableBodyShifts');
  
    // Use the data from data.js
    SHIFTS.forEach(item => {
        currentShift = new Shift(item.id, item.role, item.place, item.dateTime, item.duration, item.volunteersNeeded, item.assignedVolunteers, item.assignedShow);
        if(currentShift.isShiftAvailable()){
            const row = document.createElement('tr');
            const [date, time] = item.dateTime.split(' ');
            var assignedShow;
            SHOWS.forEach(showItem => {
                if(showItem.showID == item.assignedShow){
                    assignedShow = showItem.name;
                }
            });
            row.innerHTML = `
            <td>${item.role}</td>
            <td>${item.place}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td>${item.duration}m</td>
            <td>${assignedShow}</td>
            `;
            tableBodyShifts.appendChild(row);
        }
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
            window.location.href = 'admin.html';
        } else {
            // Redirect to user index page
            window.location.href = 'logged_in_show_shifts.html';
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

  const newUserId = USERS.length > 0 ? USERS[USERS.length - 1].userID + 1 : 1;

  newUser = new User(newUserId, name, email, password, date, phone, false, false)

  if (USERS.length != newUser.createUser(USERS).length) return true
  else return false
}


document.getElementById('registerBtn').addEventListener('click', function () {
  if (register()) {
        alert("Registration complete!");
        $('#registerModal').modal('hide');
      //alert("Request sent. Account on it's way!");
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const createShowForm = document.getElementById('createShowForm');

    if (!createShowForm) {
        console.error('Create Show Form not found');
        return;
    }

    createShowForm.addEventListener('submit', function(event) {
        console.log('Form submission event triggered'); // Debugging line
        event.preventDefault();

        const showTitle = document.getElementById('showTitle');
        const showDescription = document.getElementById('showDescription');
        const showTime = document.getElementById('showTime');
        const showPrice = document.getElementById('showPrice');
        const showRoom = document.getElementById('showRoom');

        if (!showTitle || !showDescription || !showTime || !showPrice || !showRoom) {
            console.error('Some form elements are missing.');
            return;
        }

        if (!showTitle.value.trim() || !showDescription.value.trim() || !showTime.value.trim()) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate price to be a positive number
        const priceValue = parseFloat(showPrice.value);
        if (isNaN(priceValue) || priceValue < 0) {
            alert('Please enter a valid price.');
            return;
        }

        // Example admin user, in a real scenario, you'd get this from your user session or similar
        const admin = new admin(1, 'John Doe', 'john@example.com', 'password', 30, '1234567890', true, true);

        // Call the createShow method of the Admin instance
        const resultMessage = admin.createShow(
            showTitle.value,
            showDescription.value,
            showTime.value,
            showPrice.value,
            showRoom.value
        );

        console.log('Result Message:', resultMessage); // Add this for debugging

        alert(resultMessage);

        if (resultMessage === 'Show created successfully') {
            // Clear the form after successful submission
            createShowForm.reset();
            // Optionally redirect to the admin view
            window.location.href = 'admin.html';
        }
    });
});
