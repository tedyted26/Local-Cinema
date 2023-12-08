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
const Admin = require('../models/admin.js'); // Adjust the path as necessary

describe('Create Show Form', () => {
    beforeEach(() => {
        // Reset SHOWS array and mock functions before each test
        SHOWS = [];
        Admin.prototype.createShow = jest.fn();
    });

    it('should add a show to SHOWS on form submission', () => {
        // Setup form values
        const showTitle = 'New Show';
        const showDescription = 'A test show description';
        const showTime = '2023-01-01T20:00';
        const showPrice = '15';
        const showRoom = 'A1';

        document.getElementById('showTitle').value = showTitle;
        document.getElementById('showDescription').value = showDescription;
        document.getElementById('showTime').value = showTime;
        document.getElementById('showPrice').value = showPrice;
        document.getElementById('showRoom').value = showRoom;

        // Load scripts which attaches the event listener
        require('../js/scripts.js');

        // Action: Simulate form submission
        const form = document.getElementById('createShowForm');
        form.dispatchEvent(new dom.window.Event('submit'));

        // Assertions
        expect(Admin.prototype.createShow).toHaveBeenCalledWith(
            showTitle,
            showDescription,
            showTime,
            showPrice,
            showRoom
        );
    });

});