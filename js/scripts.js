$(document).ready(function(){
  $(".quiz").submit(function(event){
    var nameInput = $("#name").val();
    var ageInput = parseInt($("#age").val());
    var colorInput = $("#color").val();
    var genderInput = $("input:radio[name=gender]:checked").val();
    console.log(nameInput);
    console.log(ageInput);

    // adds error color to age field when left empty
    // also best practice is to parseInt("#age") here instead
    if (isNaN(ageInput)){
      $(".age").addClass("has-error");
      $(".help-inline").show();
    }


    if (ageInput <= 18 && colorInput === "Red" && genderInput === "female"){
      $(".men").show();
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
    }
    // else {
    //   $(".help-inline").show();
    //   if (ageInput === NaN){
    //     $(".age").addClass("has-error");
    //   }
    // }

    event.preventDefault();
  });
});
