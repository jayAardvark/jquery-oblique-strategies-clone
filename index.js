$(document).ready(function () {

  var text = void 0;



  var currentQuote = void 0;

  var randomIndex = void 0;
  switchQuote();

  function switchQuote() {
    text = ['Emphasize the flaws', 'Discard an axiom', 'Repetition is a form of change', 'Change instrument roles', 'Get your neck massaged', 'Do we need holes?', 'The most important thing is the thing most easily forgotten', 'Give the game away', 'Remove ambiguities and convert to specifics', 'Allow an easement (an easement is the abandonment of a structure)', 'Revaluation (a warm feeling)', 'Look at the order in which you do things', 'Emphasize differences', 'Is it finished?', 'You don\'t have to be ashamed of using your own ideas'];

    randomIndex = parseInt(Math.random() * text.length);
    $('#text').text(text[randomIndex]);


    currentQuote = text[randomIndex];


  }




  function tweetQuote() {
    var link = $('#tweet-quote').attr('href');
    window.open(link + currentQuote);
  }

  $('#new-quote').click(switchQuote);
  $('#tweet-quote').click(tweetQuote);


});