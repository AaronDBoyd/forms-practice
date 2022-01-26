
function survey(person1,happyColor,dob) {
  return person1 + happyColor + dob;
}






$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
const person1Input = $("input#person1").val();    
const happyColor = $("#happyColor").val();
const dob = $("#born").val();
const result = survey(person1Input+" ", happyColor+" " , dob );
alert(result);
  });
});



$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".person1").append(person1Input);
    $(".happyColor").append(happyColorInput);
    $(".dob").append(bornInput);

    $("#survey").show();
  });
});