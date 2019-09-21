$(function () {
  
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var devour = $(this).data("devoured");

    var newDevouredState = {
      devour: devoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("Changed devoured to", devour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $('#bur').val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});