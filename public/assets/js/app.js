$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger = {
        addBurger: $("name").val().trim(),
        Devour: $(true).val().trim()
    };

    // Send the POST request.
    $.ajax("/api/main.handlebars", {
        method: "POST",
        data: burgers
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});