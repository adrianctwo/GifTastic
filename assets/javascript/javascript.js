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

    function gifs () {
        var pokemon = $(this).attr("data");
        var queryURL = "api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=GSNMky4kJUiFFYrqfhjUqS79OW529dXb&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            console.log(queryURL);
            console.log(response);

            var results = response.data;

            $("#gifs").empty();
            for(var i = 0; i < results.length; i++) {
                var pokemonDiv = $("<div>");
                var p = $("<p class 'rating'>").text("Rating:" + results[i].rating);
                var pokemonImage = $("<img>");
            }


        })
    }
})