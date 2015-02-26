$("#get-dish").on("click", function() {
  $.get("/brussels-party.json", function(dishes) {
    $("#brussels").text(dishes["brussels"]);
    alert("Your random dish is: " + dishes["brussels"] + " ")
  });
});

// $("#get-dish").on("click", function() {
//   $.get("/brussels-party.json", function(dishes) {
//     $("#dishes").alert(newFortune["dishes"]);
//   });
// });
