$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        // Add your code here
        $("h1").text("Butterfly");
        $("#p1").addClass("butterfly");
        $("#p1").html("This is a <strong>butterfly</strong> in its natural habitat");
        $("img").attr("src","https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png")
        $("h1").css("color","orange");
        $('#restore').show();
        $('#transform').hide();
        var newP = $("<p>");
        newP.text("Butterfly Facts:");
        newP.addClass("result");
        // append prepend after
        $("body").append(newP);

        var ulArray = ["Monarch butterflies migrate as far as 3,000 miles",
        "Only about 4% of the world\’s species of butterflies are found in the US",
        "Butterflies perform mimicry to better protect themselves from predators",
        "Butterflies\’ pollinating capabilities are even more crucial to ecosystems than you may think.",
        "Butterflies\’ wings follow two distinct color forms",
        "Most adult butterflies only live for 1-2 weeks"];
        var newUL = $("<ul>")
        for(var i=0; i<ulArray.length; i++){

                newUL.append("<li>"+ulArray[i]+"</li>");

            }
        // newUL.append("<li>hello</li><li>world</li>");
        $("body").append(newUL);

        $("a").attr("href","https://en.wikipedia.org/wiki/Butterfly");
        $("a").text("Butterfly");
        newUL.addClass("result");

        var newFooter = $("<footer>");
        newFooter.text("Butterfly Facts Credit: https://www.worldanimalprotection.us/blogs/9-fascinating-facts-about-butterflies");
        newFooter.addClass("butterfly");
        // append prepend after
        $("body").append(newFooter);

        $("button, input[type='button']").css("background-color","orange");

    });

    $("#restore").on('click', function() {
        location.reload(true); 
    }); 

});