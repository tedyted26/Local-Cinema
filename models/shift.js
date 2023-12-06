class Shift {
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
      var isAvailable;
      if(this.volunteersNeeded > this.assignedVolunteers.length){
        isAvailable = true;
      }
      else{
        isAvailable = false;
      }
      return isAvailable;
    }

    userHasShift(){

    }

    assignShift(){

    }

    cancelShift(){

    }

    addToShift(){

    }
  }