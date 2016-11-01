// Business End Logic
function Ticket(movie, show, age, vet) {
  debugger;
  this.movieChoice = movie;
  this.showTime = show;
  this.ageOf = age;
  this.veteran = vet;
}

Ticket.prototype.cost= function() {
  var calculate = this.movieChoice + this.showTime + this.ageOf - this.veteran;
  return calculate;
}

// User Interface logic
$(document).ready(function() {
  $("form#stuff").submit(function(event) {
    event.preventDefault();
    debugger;

    $("#results").empty();

    var movieChoice = parseInt($("input:radio[name=movie]:checked").val());
    var showTimeInput = parseInt($("#showTime").val());
    var ageOfAttendeeInput = parseInt($("#ageOfAttendee").val());
    var vetInput = parseInt($("#vet").val());

    var newTicket = new Ticket (movieChoice, showTimeInput, ageOfAttendeeInput, vetInput);

    $("#results").append("<h2>" + newTicket.cost() + "</h2>");

    // $("input:radio[name=movie]:checked").val("");
    // $("#showTime").val("");
    // $("#ageOfAttendee").val("");
    // $("#vet").val("")


  });
});
