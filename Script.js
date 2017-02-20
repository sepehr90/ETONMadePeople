$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
/////////////////////////////////////////////////////////////
$(function() {
    // Set effect from select menu value
    $("#button").on("click", function() {
        //runEffect();
        if (document.getElementById("theBule").style.display === "none") {
            document.getElementById("theBule").style.display = "inline";
        } else
            document.getElementById("theBule").style.display = "none";
    });
    $("#button1").on("click", function() {
        //runEffect();
        if (document.getElementById("theBule").style.display === "none") {
            document.getElementById("theBule").style.display = "inline";
        } else
            document.getElementById("theBule").style.display = "none";
    });
});
//////////////////////////////////////////////////////////////
$(document).ready(function() {
    $('#slidenav').animate({
        top: '-' + $(this).height()
    }, 200);
    $('#open a').toggle(
        function() {
            $('#slidenav').animate({
                top: '0'
            }, 500);
        },
        function() {
            $('#slidenav').animate({
                top: '-4' + $(this).height()
            }, 500);
        });
});