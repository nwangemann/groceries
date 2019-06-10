var GroceryArray = [];
$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var Gro1 = $("#Grocery1").val();
    var Gro2 = $("#Grocery2").val();
    var Gro3 = $("#Grocery3").val();
    (GroceryArray).push(Gro1, Gro2, Gro3);
        $("#li1").text(GroceryArray[0]);
        $("#li2").text(GroceryArray[1]);
        $("#li3").text(GroceryArray[2]);
        if (GroceryArray = true);
        $(".GroceryForm").hide();
});
});
