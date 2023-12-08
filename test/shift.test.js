const Shift = require("../models/shift.js")
var shiftint = 1
var myShift = new Shift(shiftint,1,1,1,1,1,1,1);
console.log(myShift.shiftID);

// assignedVolunteers < volunteersNeeded = true
VN1 = 3
AV1 = [2, 5]
var shiftOne = new Shift(1,1,1,1,1, VN1, AV1,1)
console.log("assignedVolunteers < volunteersNeeded = true")
console.log("returned value: " + shiftOne.isShiftAvailable())

// assignedVolunteers > volunteersNeeded = false
VN2 = 2
AV2 = [1,2,3,4,5]
var shiftTwo = new Shift(1,1,1,1,1, VN2, AV2,1)
console.log("assignedVolunteers > volunteersNeeded = false")
console.log("returned value: " + shiftTwo.isShiftAvailable())

// assignedVolunteers != [] = error
VN3 = 5
AV3 = "big"
var shiftThree = new Shift(1,1,1,1,1, VN3, AV3,1)
console.log("assignedVolunteers != [] = error")
console.log("returned value: " + shiftThree.isShiftAvailable())

// volunteersNeeded != int = error
VN4 = "jens"
AV4 = [3, 5]
var shiftFour = new Shift(1,1,1,1,1, VN4, AV4,1)
console.log("volunteersNeeded != int = error")
console.log("returned value: " + shiftFour.isShiftAvailable())

// assignedVolunteers == volunteersNeeded = false
VN5 = 3
AV5 = [5,6,7]
var shiftFive = new Shift(1,1,1,1,1, VN5, AV5,1)
console.log("assignedVolunteers == volunteersNeeded = false")
console.log("returned value: " + shiftFive.isShiftAvailable())