$(document).ready(function() {
  var groceries = [];
  var items = ["item1", "item2", "item3", "item4"];

  $("#formGroceries").submit(function(event) {
    items.forEach(function(item) {
      var userInput = $("input#"+item).val();
      groceries.push(userInput);
    });

    var sortGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
      // return grocery.sort();
    });
    sortGroceries.sort();
    // alert(sortGroceries);

    sortGroceries.forEach(function(sortGrocery){
      $("#list ul").append("<li>"+sortGrocery+"</li>");
    });

    event.preventDefault();
  });




})
