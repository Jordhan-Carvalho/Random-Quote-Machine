$("#getqo").on("click", function() {
  $("h1").html("");
  $(".mb-0").html("");
  $(".blockquote-foot").html("");
  $("#getqo").html("Another quote");
   $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json){
        $(".quote").html(json.quote);
     $(".autor").html("- "+json.author);
     
     
     // twitter
     var tweetUrl = "";

tweetUrl = "https://twitter.com/intent/tweet?text=" + json.quote + "  - " + json.author;

document.getElementById('tweet-share').setAttribute("href", tweetUrl);
     // end twitter
      });
  
});