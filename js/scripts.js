$(document).ready(function(){
  $(".quiz").submit(function(event){
    var nameInput = $("#name").val();
    var ageInput = parseInt($("#age").val());
    var colorInput = $("#color").val();
    var genderInput = $("input:radio[name=gender]:checked").val();

    if (ageInput <= 18 && colorInput === "Red" && genderInput === "female"){
      $('.men').show()
      $("#justinBeiber").show();
    } else if ((ageInput >= 19 && ageInput < 39) && colorInput === "Blue" && genderInput === "female") {
      $("#bradPitt").show();
    } else if (ageInput >= 40 && colorInput === "Green" && genderInput === "female") {
      $("#georgeClooney").show();
    } else if (ageInput <= 18 && colorInput === "Red" && genderInput === "male"){
      $("#arianaGrande").show();
    } else if ((ageInput >= 19 && ageInput < 39) && colorInput === "Blue" && genderInput === "male") {
      $("#angelinaJolie").show();
    } else if (ageInput >= 40 && colorInput === "Green" && genderInput === "male") {
      $("#susanSarandon").show();
    } else {
      alert("No date for you!")
    }

    event.preventDefault();
  });
});
