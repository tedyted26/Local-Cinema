const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load HTML content
const htmlContent = fs.readFileSync(path.resolve(__dirname, '../create-show.html'), 'utf8');
const dom = new JSDOM(htmlContent);
global.document = dom.window.document;
global.window = dom.window;

// Mock the SHOWS array and Admin class
global.SHOWS = [];
const Admin = require('..models/admin.js');

describe('Create Show Form', () => {
    it('should add a show to SHOWS on form submission', () => {
        // Setup
        document.getElementById('showTitle').value = 'New Show';
        // Set values for other fields similarly

        // Mock Admin class's createShow method
        Admin.prototype.createShow = jest.fn();

        require('../js/scripts.js');s

        // Action
        const form = document.getElementById('createShowForm');
        form.dispatchEvent(new dom.window.Event('submit'));

        // Assertion
        expect(Admin.prototype.createShow).toHaveBeenCalled();
    });

});
