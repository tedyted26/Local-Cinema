window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesUsers = document.getElementById('usersTable');
    const datatablesSimple = document.getElementById('datatablesSimple');
    const datatableShifts = document.getElementById('datatableShifts');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
    if (datatableShifts) {
        new simpleDatatables.DataTable(datatableShifts);
    }
    if (datatablesUsers) {
        new simpleDatatables.DataTable(datatablesUsers);
    }
});
