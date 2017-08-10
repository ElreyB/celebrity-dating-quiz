$(document).ready(function(){
  $(".quiz").submit(function(event){
    var nameInput = $("#name").val();
    var ageInput = parseInt($("#age").val());
    var colorInput = $("#color").val();
    var genderInput = $("input:radio[name=gender]:checked").val();

    if (ageInput <= 18 && colorInput === "Red" && genderInput === "female"){
      $('.men').show()
      $("#justinBeiber").show();
    } else if ((ageInput >= 19 && ageInput < 39) && colorInput === "blue" && genderInput === "female") {
      $("#bradPitt").show();
    } else if (ageInput >= 40 && colorInput === "green" && genderInput === "female") {
      $("#george").show();
    } else if (ageInput <= 18 && colorInput === "red" && genderInput === "male"){
      $("#arianna").show();
    } else if ((ageInput >= 19 && ageInput < 39) && colorInput === "blue" && genderInput === "male") {
      $("#angelina").show();
    } else if (ageInput >= 40 && colorInput === "green" && genderInput === "male") {
      $("#susan").show();
    } else {
      alert("No date for you!")
    }

    event.preventDefault();
  });
});
