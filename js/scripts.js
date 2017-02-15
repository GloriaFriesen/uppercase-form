$("document").ready(function() {
  $("#formOne").submit(function() {
    var sentenceInput = $("input#sentence").val();
    var sentenceInput = sentenceInput.toUpperCase();
    $(".sentence").text(sentenceInput);

    $("#result").show();

    event.preventDefault();

  });
});
