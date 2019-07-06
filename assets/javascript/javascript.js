$(document).ready(function(){
    var topics = ["Pikechu", "squirtle"];

    function createButtons() {
        $("#gifs-buttons").empty();
        for(i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("pokemon-btn");
            buttons.attr("data", topics[i]);
            buttons.text(topics[i]);

            $("#gifs-buttons").append(buttons);
        }
    }


    createButtons();
})