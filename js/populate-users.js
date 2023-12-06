document.addEventListener('DOMContentLoaded', function () {
    // Function to get user details by ID
    function getUserDetails(userId) {
        return USERS.find(user => user.userID === userId);
    }

    // Function to get show details by ID
    function getShowDetails(showId) {
        return SHOWS.find(show => show.showID === showId);
    }

    // Function to format date and time
    function formatDateTime(dateTime) {
        const date = dateTime.split(' ')[0];
        const time = dateTime.split(' ')[1];
        return { date, time };
    }

    // Function to populate the table with user, shift, and show details
    function populateUsersTable() {
        const tableBody = document.getElementById('usersTableBody');

        // Loop through shifts
        SHIFTS.forEach(shift => {
            // Loop through assigned volunteers for each shift
            shift.assignedVolunteers.forEach(userId => {
                const user = getUserDetails(userId);
                const show = getShowDetails(shift.assignedShow[0]);

                // Format shift date and time
                const shiftDateTime = formatDateTime(shift.dateTime);

                // Format show date and time
                const showDateTime = formatDateTime(show.datetime);

                // Create a new row for each user and their shift-show details
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${shift.role}</td>
                    <td>${shift.place}</td>
                    <td>${shiftDateTime.time}</td>
                    <td>${show.name}</td>
                    <td>${showDateTime.time}</td>
                    <td>${shiftDateTime.date}</td>
                `;

                // Append the row to the table
                tableBody.appendChild(row);
            });
        });
    }

    // Call the function to populate the table when the DOM is loaded
    populateUsersTable();
});
