$(document).ready(function(){
    var topics = ["Pikechu", "Squirtle"];
    var results;
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

    $("#add-pokemon").on("click", function(event){
        event.preventDefault();

        var pokemonName = $("#pokemon-input").val().trim();

        topics.push(pokemonName);
        $("#pokemon-input").val("");


        createButtons();

        console.log(topics);
    })
    createButtons();

    function dataPull () {
        var pokemon = $(this).attr("data");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=GSNMky4kJUiFFYrqfhjUqS79OW529dXb&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            console.log(queryURL);
            console.log(response);

            results = response.data;

            $("#gifs").empty();
            for(var i = 0; i < results.length; i++) {
                var pokemonDiv = $("<div>");
                var p = $("<p class 'rating'>").text("Rating:" + results[i].rating);
                var pokemonImage = $("<img>");

                p.addClass("ratings");

                pokemonImage.addClass("image-gifs")
                pokemonImage.attr("src", results[i].images.fixed_height_still.url);
                pokemonImage.attr("data-state", "still");
                pokemonImage.attr("data-position", i);

                pokemonDiv.append(p);
                pokemonDiv.append(pokemonImage);
                pokemonDiv.addClass("gif");

                $("#gifs").prepend(pokemonDiv);
            }
        })
    }

    $(document).on("click", ".pokemon-btn", dataPull);

    function animate() {
        var state = $(this).attr("data-state");
        var position = $(this).attr("data-position");
        position = parseInt(position);

        if (state === "still") {
            $(this).attr("src", results[position].images.fixed_height.url);
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", results[position].images.fixed_height_still.url);
            $(this).attr("data-state", "still");
        }
    };

    $(document).on("click", ".image-gifs", animate)
})