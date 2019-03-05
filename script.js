$("button").click(function() {
    $("#secretmessage1").text("Now double click this button!!");
    $("button").css("width", "75px");
});

$("button").dblclick(function() {
    $("#secretmessage1").text("OH NO WHAT DID U DO!! DOUBLE CLICK NO");
    $(".img1").hide();
    $("button").hide();
});

$("#secretmessage1").dblclick(function() {
    $(".img1").show();
    $("#secretmessage1").text("THANK GOD THATS BETTER NOW CLICK TO TAKE THE GOLD!!");
});

$(".img1").click(function() {
    $(".img1").slideUp();
    $("#secretmessage1").text("OH NO THAT WAS A FAKE HURRY CLICK THE HEADER!!");
    $("header1").attr("src", "https://s3.pixers.pics/pixers/700/FO/53/07/92/68/700_FO53079268_0283661e185f28be03c16724fc4e093b.jpg");
});

$("#secretmessage1").click(function() {
    $(".img1 img").attr("src","https://www.hammondgower.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/s/msw243_3.jpg");
    $("#secretmessage2").text("CONGRADUALTIONS");
    
});



