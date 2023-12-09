class Shift {
    shiftID
    role
    place
    dateTime
    duration
    volunteersNeeded
    assignedVolunteers
    assignedShow
    constructor(shiftID, role, place, dateTime, duration, volunteersNeeded, assignedVolunteers, assignedShow) {
      this.shiftID = shiftID;
      this.role = role;
      this.place = place;
      this.dateTime = dateTime;
      this.duration = duration;
      this.volunteersNeeded = volunteersNeeded;
      this.assignedVolunteers = assignedVolunteers;
      this.assignedShow = assignedShow;
    }
    
    isShiftAvailable(){
      try{
        if(!Array.isArray(this.assignedVolunteers)) throw "assignedVolunteers is broken"
        if(!Number.isInteger(this.volunteersNeeded)) throw "volunteersNeeded is broken"
      }
      catch(err){
        console.log("Error: " + err);
      }
      var isAvailable;
      if(this.volunteersNeeded > this.assignedVolunteers.length){
        isAvailable = true;
      }
      else{
        isAvailable = false;
      }
      return isAvailable;
    }
  }
  module.exports = Shift;